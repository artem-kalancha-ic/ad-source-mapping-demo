import { LayoutDashboard, Building2, BarChart3, BrainCircuit, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import styles from './Overview.module.css';

function FlowNode({ icon: Icon, label, sub, chips, badge, variant, delay = 0 }) {
  return (
    <motion.div
      className={`${styles.node} ${styles[variant]}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + delay * 0.15, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -3 }}
    >
      {badge && (
        <span className={`${styles.badge} ${styles[badge.variant]}`}>{badge.label}</span>
      )}
      <div className={styles.nodeIconWrap}>
        <Icon size={28} />
      </div>
      <div className={styles.nodeLabel}>{label}</div>
      {sub && <div className={styles.nodeSub}>{sub}</div>}
      {chips && (
        <div className={styles.chipList}>
          {chips.map((chip) => (
            <span key={chip} className={`${styles.chip} ${styles[`${variant}Chip`]}`}>{chip}</span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

function FlowArrow({ label, variant, delay = 0 }) {
  return (
    <motion.div
      className={`${styles.arrow} ${styles[variant]}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 + delay * 0.15, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      <span className={styles.arrowLabel}>{label}</span>
      <motion.div
        className={styles.arrowLine}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5 + delay * 0.15, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.div>
  );
}

function Divider() {
  return (
    <motion.div
      className={styles.divider}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      <span className={styles.dividerLine} />
      <span className={styles.dividerDot} />
      <span className={styles.dividerDot} />
      <span className={styles.dividerDot} />
      <span className={styles.dividerLine} />
    </motion.div>
  );
}

function ExampleTable({ headers, rows, variant, delay = 0 }) {
  return (
    <motion.div
      className={styles.exampleSection}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 + delay * 0.15, duration: 0.4 }}
    >
      <div className={styles.exampleLabel}>Data Examples</div>
      <div className={styles.tableWrap}>
        <table className={`${styles.table} ${styles[`${variant}Table`]}`}>
          <thead>
            <tr>
              {headers.map((h) => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j}>
                    <span className={styles.cellValue}>{cell}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

const pmsExamples = {
  headers: ['PMS Source', 'GA Source / Medium', 'AI Source', 'AI Cost Group'],
  rows: [
    ['Apartments.com', 'apartments_com / referral', 'ILS', 'ILS'],
    ['Walk-In', 'direct / none', 'Walk-In', 'Organic'],
    ['Google Paid', 'google / cpc', 'Paid Search', 'Paid Search'],
  ],
};

const onlineExamples = {
  headers: ['GA Source', 'GA Medium', 'GA Campaign', 'AI Source', 'AI Cost Group'],
  rows: [
    ['google', 'cpc', 'brand_campaign', 'Paid Search', 'Paid Search'],
    ['facebook', 'paid_social', 'retargeting_q1', 'Paid Social', 'Paid Social'],
    ['google', 'organic', '(not set)', 'Organic Search', 'Organic'],
  ],
};

export default function Overview() {
  return (
    <PageWrapper
      title="Ad Source Mapping"
      subtitle="Data flow architecture"
      icon={LayoutDashboard}
      accentColor="#6c63ff"
    >
      <div className={styles.diagram}>

        {/* PMS Source Mapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionTag} ${styles.pmsTag}`}>PMS Source Mapping</span>
            <span className={styles.sectionLine} />
          </div>

          <div className={styles.flowWrapper}>
            <div className={styles.flowRow}>
              <FlowNode
                icon={Building2}
                label="PMS Source"
                chips={['Knock', 'Yardi', 'Entrata']}
                badge={{ label: 'Step 1', variant: 'badgeStep1' }}
                variant="pms"
                delay={0}
              />
              <FlowArrow label="PMS → Source/Medium" variant="pmsArrow" delay={1} />
              <FlowNode
                icon={BarChart3}
                label="Google Analytics"
                chips={['source', 'medium']}
                badge={{ label: 'Step 2', variant: 'badgeStep2' }}
                variant="ga"
                delay={2}
              />
              <FlowArrow label="Source/Medium → AI Source + Cost Group" variant="gaArrow" delay={3} />
              <FlowNode
                icon={BrainCircuit}
                label="SDM Apartment Intelligence"
                chips={['AI Source', 'AI Cost Group']}
                variant="ai"
                delay={4}
              />
            </div>
            <span className={styles.braceLabel}>Two-step mapping: PMS → GA → AI</span>
          </div>

          <ExampleTable
            headers={pmsExamples.headers}
            rows={pmsExamples.rows}
            variant="pms"
            delay={0}
          />
        </motion.div>

        <Divider />

        {/* Online Mapping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionTag} ${styles.onlineTag}`}>Online Mapping</span>
            <span className={styles.sectionLine} />
          </div>

          <div className={styles.flowWrapper}>
            <div className={`${styles.flowRow} ${styles.flowRowCompact}`}>
              <FlowNode
                icon={BarChart3}
                label="Google Analytics"
                chips={['source', 'medium', 'campaign']}
                badge={{ label: 'Direct', variant: 'badgeDirect' }}
                variant="ga"
                delay={0}
              />
              <FlowArrow label="Source/Medium/Campaign → AI Source + Cost Group" variant="gaArrow" delay={1} />
              <FlowNode
                icon={BrainCircuit}
                label="SDM Apartment Intelligence"
                chips={['AI Source', 'AI Cost Group']}
                variant="ai"
                delay={2}
              />
            </div>
            <span className={styles.braceLabel}>Single-step mapping: GA4 → AI (second part only)</span>
          </div>

          <ExampleTable
            headers={onlineExamples.headers}
            rows={onlineExamples.rows}
            variant="online"
            delay={0}
          />
        </motion.div>

      </div>
    </PageWrapper>
  );
}
