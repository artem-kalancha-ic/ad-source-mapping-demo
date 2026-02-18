import { motion } from 'framer-motion';
import styles from './PlaceholderCard.module.css';

export default function PlaceholderCard({ delay = 0, children }) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + delay * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {children || (
        <div className={styles.skeleton}>
          <div className={styles.line} style={{ width: '60%' }} />
          <div className={styles.line} style={{ width: '80%' }} />
          <div className={styles.line} style={{ width: '45%' }} />
        </div>
      )}
    </motion.div>
  );
}
