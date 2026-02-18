import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Intro.module.css';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className={styles.title}>
          <span className={styles.titleAccent}>Ad Source Mapping</span>
          <br />
          Demo
        </h1>

        <p className={styles.subtitle}>
          Interactive walkthrough of how ad source mappings cascade across
          global, company, and property levels.
        </p>

        <motion.button
          className={styles.enterButton}
          onClick={() => navigate('/overview')}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          whileTap={{ scale: 0.97 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
}
