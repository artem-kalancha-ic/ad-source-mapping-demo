import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, Globe, Building2, Home } from 'lucide-react';
import PageWrapper from '../PageWrapper/PageWrapper';
import styles from './ExampleLayout.module.css';

const STATUS_COLORS = {
  Unmapped: '#FD7943',
  Auto: '#0984E3',
  Mapped: '#00B894',
};

const LEVEL_CONFIG = {
  global: { icon: Globe, label: 'Global Level', color: '#6c63ff' },
  company: { icon: Building2, label: 'Company Level', color: '#00d4aa' },
  property: { icon: Home, label: 'Property Level', color: '#FD7943' },
};

const VARIANT_CLASS = {
  primary: 'actionPrimary',
  danger: 'actionDanger',
  reset: 'actionReset',
};

function StatusBadge({ status }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={status}
        className={styles.statusBadge}
        style={{ '--badge-color': STATUS_COLORS[status] }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.25 }}
      >
        {status}
      </motion.span>
    </AnimatePresence>
  );
}

function MappingRow({ from, to, muted }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${from}-${to}`}
        className={`${styles.mappingRow} ${muted ? styles.mappingMuted : ''}`}
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 8 }}
        transition={{ duration: 0.3 }}
      >
        <span className={styles.mappingFrom}>{from}</span>
        <span className={styles.mappingArrow}>→</span>
        <span className={styles.mappingTo}>{to}</span>
      </motion.div>
    </AnimatePresence>
  );
}

function TimelineCheckpoint({ level, config, index, customLabel }) {
  const { icon: Icon, label, color } = LEVEL_CONFIG[level];
  const { status, mapping, highlight, ignored } = config;

  return (
    <motion.div
      className={`${styles.checkpoint} ${highlight ? styles.checkpointHighlight : ''} ${ignored ? styles.checkpointIgnored : ''}`}
      style={{ '--level-color': color }}
      initial={{ opacity: 0, y: 16 }}
      animate={{
        opacity: ignored ? 0.35 : 1,
        y: 0,
        scale: highlight ? 1.02 : 1,
        boxShadow: highlight
          ? `0 0 24px color-mix(in srgb, ${color} 30%, transparent)`
          : '0 2px 8px rgba(0,0,0,0.2)',
      }}
      transition={{ delay: 0.3 + index * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className={styles.timelineDot} style={{ background: color }} />
      <div className={styles.checkpointContent}>
        <div className={styles.checkpointHeader}>
          <div
            className={styles.checkpointIcon}
            style={{
              background: `color-mix(in srgb, ${color} 15%, transparent)`,
              color,
            }}
          >
            <Icon size={20} />
          </div>
          <div className={styles.checkpointLabels}>
            <span className={styles.checkpointLabel} style={{ color }}>{label}</span>
            {customLabel && <span className={styles.checkpointName}>{customLabel}</span>}
          </div>
          <StatusBadge status={status} />
        </div>
        <MappingRow from={mapping.from} to={mapping.to} muted={status === 'Unmapped'} />
      </div>
    </motion.div>
  );
}

export default function ExampleLayout({
  title,
  subtitle,
  icon,
  accentColor,
  explanation,
  steps,
  levelLabels,
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const step = steps[currentStep];

  const handleAction = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  return (
    <PageWrapper title={title} subtitle={subtitle} icon={icon} accentColor={accentColor}>
      <div className={styles.layout}>
        {/* Explanation */}
        <motion.div
          className={styles.explanationCard}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className={styles.explanationIcon}>
            <Info size={20} />
          </div>
          <div className={styles.explanationText}>{explanation}</div>
        </motion.div>

        {/* Bottom: action + timeline */}
        <div className={styles.bottomSection}>
          <motion.div
            className={styles.actionArea}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.stepIndicator}>
              Step {currentStep + 1} of {steps.length}
            </div>
            {(step.description || step.descriptionFields) && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={step.description || JSON.stringify(step.descriptionFields)}
                  className={styles.actionDescription}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.25 }}
                >
                  {step.description && <span>{step.description}</span>}
                  {step.descriptionFields?.map(({ label, value }) => (
                    <div key={label} className={styles.descriptionLine}>
                      <span className={styles.descriptionLabel}>{label}</span>
                      <span className={styles.descriptionValue}>{value}</span>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            )}
            <motion.button
              className={`${styles.actionButton} ${styles[VARIANT_CLASS[step.buttonVariant]]}`}
              onClick={handleAction}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {step.buttonLabel}
            </motion.button>
          </motion.div>

          <motion.div
            className={styles.timeline}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className={styles.timelineLine} />
            {['global', 'company', 'property'].map((level, i) => (
              <TimelineCheckpoint
                key={level}
                level={level}
                config={step.levels[level]}
                index={i}
                customLabel={levelLabels?.[level]}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
