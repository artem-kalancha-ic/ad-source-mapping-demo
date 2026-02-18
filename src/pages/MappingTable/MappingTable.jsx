import { Table, FileText, CheckCircle, BarChart3, BrainCircuit, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import styles from './MappingTable.module.css';

const columns = [
  {
    icon: FileText,
    label: 'PMS Ad Source',
    desc: 'Source that comes from PMS events (Knock, Yardi, Entrata)',
    variant: 'cardPms',
  },
  {
    icon: CheckCircle,
    label: 'Status',
    desc: null,
    variant: 'cardStatus',
    statuses: [
      { label: 'Unmapped', color: '#FD7943' },
      { label: 'Auto', color: '#0984E3' },
      { label: 'Mapped', color: '#00B894' },
    ],
  },
  {
    icon: BarChart3,
    label: 'Mapped Source',
    desc: 'How Google Analytics sees the data — source and medium/type',
    variant: 'cardMapped',
  },
  {
    icon: BrainCircuit,
    label: 'Rule + AI Name + Cost Group',
    desc: 'Tells the system how to display and group data on Apartment Intelligence pages',
    variant: 'cardAi',
    wide: true,
  },
  {
    icon: MoreHorizontal,
    label: 'Action',
    desc: 'Edit or remove a mapping entry',
    variant: 'cardAction',
  },
];

export default function MappingTable() {
  return (
    <PageWrapper
      title="Mapping Table"
      subtitle="Column reference guide"
      icon={Table}
      accentColor="#ffd93d"
    >
      <div className={styles.wrapper}>

        {/* Explanation cards */}
        <div className={styles.cardsRow}>
          {columns.map((col, i) => (
            <motion.div
              key={col.label}
              className={`${styles.cardCol} ${col.wide ? styles.cardColWide : ''}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className={`${styles.card} ${styles[col.variant]}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrap}>
                    <col.icon size={18} />
                  </div>
                  <span className={styles.cardLabel}>{col.label}</span>
                </div>
                {col.desc && <div className={styles.cardDesc}>{col.desc}</div>}
                {col.statuses && (
                  <div className={styles.statusList}>
                    {col.statuses.map((s) => (
                      <span
                        key={s.label}
                        className={styles.statusBadge}
                        style={{ '--badge-color': s.color }}
                      >
                        {s.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {col.variant === 'cardPms' ? (
                <div className={`${styles.stemBroken} ${styles.stemBrokenPms}`}>
                  <div className={styles.stemSeg1} />
                  <div className={styles.stemSeg2} />
                  <div className={styles.stemSeg3} />
                </div>
              ) : col.variant === 'cardStatus' ? (
                <div className={`${styles.stemBroken} ${styles.stemBrokenStatus}`}>
                  <div className={styles.stemSeg1} />
                  <div className={styles.stemSeg2} />
                  <div className={styles.stemSeg3} />
                </div>
              ) : col.variant === 'cardMapped' ? (
                <div className={`${styles.stemBroken} ${styles.stemBrokenMapped}`}>
                  <div className={styles.stemSeg1} />
                  <div className={styles.stemSeg2} />
                  <div className={styles.stemSeg3} />
                </div>
              ) : col.variant === 'cardAi' ? (
                <svg className={styles.stemFork} viewBox="0 0 360 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Trunk */}
                  <line x1="180" y1="0" x2="180" y2="100" stroke="var(--col-ai)" strokeWidth="3" />
                  {/* Left branch */}
                  <line x1="180" y1="100" x2="0" y2="100" stroke="var(--col-ai)" strokeWidth="3" />
                  <line x1="0" y1="100" x2="0" y2="250" stroke="var(--col-ai)" strokeWidth="3" />
                  <circle cx="0" cy="250" r="4.5" fill="var(--col-ai)" />
                  {/* Center branch */}
                  <line x1="180" y1="100" x2="180" y2="250" stroke="var(--col-ai)" strokeWidth="3" />
                  <circle cx="180" cy="250" r="4.5" fill="var(--col-ai)" />
                  {/* Right branch */}
                  <line x1="180" y1="100" x2="360" y2="100" stroke="var(--col-ai)" strokeWidth="3" />
                  <line x1="360" y1="100" x2="360" y2="250" stroke="var(--col-ai)" strokeWidth="3" />
                  <circle cx="360" cy="250" r="4.5" fill="var(--col-ai)" />
                </svg>
              ) : (
                <div className={styles.stem} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Screenshot */}
        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <img src="/mapping-table.png" alt="Ad Source Mapping Table" />
          <div className={styles.imageFade} />
        </motion.div>

      </div>
    </PageWrapper>
  );
}
