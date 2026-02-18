import { Layers, Globe, Building2, Home } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../../components/PageWrapper/PageWrapper';
import styles from './MappingLevel.module.css';

const companies = [
  {
    name: 'Gallery Residential',
    properties: [
      { name: 'Encore Luxury Residences' },
      { name: 'Livano Avondale' },
      { name: 'Collins Place' },
    ],
  },
  {
    name: 'RADCO',
    highlight: true,
    properties: [
      { name: 'The Ariel', highlight: true },
      { name: 'East Ponce Village' },
      { name: 'Bristol Creek Apartment Homes' },
    ],
  },
  {
    name: 'RangeWater Real Estate',
    properties: [
      { name: 'Veranda Dellbrook' },
      { name: 'Core at Lindbergh Station' },
      { name: 'Hampton Edison' },
    ],
  },
];

export default function MappingLevel() {
  return (
    <PageWrapper
      title="Mapping Level"
      subtitle="Mapping hierarchy levels"
      icon={Layers}
      accentColor="#00d4aa"
    >
      <div className={styles.hierarchy}>

        {/* Global Level */}
        <motion.div
          className={styles.globalRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className={`${styles.levelTag} ${styles.globalTag}`}>Global Level</span>
          <div className={styles.globalCard}>
            <div className={styles.cardIcon}>
              <Globe size={28} />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>Street Digital Media</div>
              <div className={styles.cardSub}>Global mapping configuration — applies to all companies and properties</div>
              <div className={styles.cardChips}>
                <span className={`${styles.chip} ${styles.globalChip}`}>Default Rules</span>
                <span className={`${styles.chip} ${styles.globalChip}`}>Base Mapping</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Connector: Global → Companies */}
        <motion.div
          className={styles.connectorRow}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          {[...companies, null].map((_, i) => (
            <div key={i} className={styles.connectorLine} />
          ))}
        </motion.div>

        {/* Company Level */}
        <motion.div
          className={styles.companyRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <span className={`${styles.levelTag} ${styles.companyTag}`}>Company Level</span>
          <div className={styles.companyGrid}>
            {companies.map((company, i) => (
              <motion.div
                key={company.name}
                className={`${styles.companyCard} ${company.highlight ? styles.companyCardHighlight : ''}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
              >
                <div className={styles.cardIcon}>
                  <Building2 size={24} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardTitle}>{company.name}</div>
                  <div className={styles.cardSub}>Company overrides</div>
                </div>
                <div className={styles.cardChips}>
                  <span className={`${styles.chip} ${styles.companyChip}`}>Custom Rules</span>
                </div>
              </motion.div>
            ))}
            <motion.div
              className={`${styles.companyCard} ${styles.etcCard}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1.0, duration: 0.4 }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>+ More Companies</div>
                <div className={styles.cardSub}>Additional companies can be added with their own custom mapping rules</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Connector: Companies → Properties */}
        <motion.div
          className={styles.companyConnectors}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.4 }}
        >
          {[...companies, null].map((_, i) => (
            <div key={i} className={styles.companyConnectorCol}>
              {i < companies.length && <div className={styles.connectorLine} />}
            </div>
          ))}
        </motion.div>

        {/* Property Level */}
        <motion.div
          className={styles.propertyRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <span className={`${styles.levelTag} ${styles.propertyTag}`}>Property Level</span>
          <div className={styles.propertyGrid}>
            {companies.map((company, ci) => (
              <div key={company.name} className={styles.propertyColumn}>
                {company.properties.map((prop, pi) => (
                  <motion.div
                    key={prop.name}
                    className={`${styles.propertyCard} ${prop.highlight ? styles.propertyCardHighlight : ''}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3 + ci * 0.1 + pi * 0.08, duration: 0.35 }}
                  >
                    <div className={styles.cardIcon}>
                      <Home size={18} />
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTitle}>{prop.name}</div>
                      <div className={styles.cardSub}>{company.name}</div>
                    </div>
                  </motion.div>
                ))}
                <motion.div
                  className={`${styles.propertyCard} ${styles.etcCard}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 1.6 + ci * 0.1, duration: 0.3 }}
                >
                  <div className={styles.cardTitle}>...</div>
                </motion.div>
              </div>
            ))}
            {/* Empty column under etc company */}
            <div className={styles.propertyColumn} />
          </div>
        </motion.div>

      </div>
    </PageWrapper>
  );
}
