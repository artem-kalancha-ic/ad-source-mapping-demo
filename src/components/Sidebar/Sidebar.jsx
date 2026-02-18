import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  Layers,
  Table,
  Globe,
  Building2,
  Home,
  Trash2,
  ChevronDown,
  Waypoints,
} from 'lucide-react';
import styles from './Sidebar.module.css';

const mainLinks = [
  { to: '/overview', label: 'Overview', icon: LayoutDashboard },
  { to: '/overview/mapping-level', label: 'Mapping Level', icon: Layers },
  { to: '/overview/mapping-table', label: 'Mapping Table', icon: Table },
];

const exampleLinks = [
  { to: '/overview/examples/create-global', label: 'Create Global Level', icon: Globe },
  { to: '/overview/examples/create-company', label: 'Create Company Level', icon: Building2 },
  { to: '/overview/examples/create-property', label: 'Create Property Level', icon: Home },
  { to: '/overview/examples/delete-property', label: 'Delete Property Level', icon: Trash2 },
];

const submenuVariants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
};

export default function Sidebar() {
  const [examplesOpen, setExamplesOpen] = useState(true);
  const location = useLocation();
  const isExampleActive = location.pathname.startsWith('/overview/examples');

  return (
    <aside className={styles.sidebar}>
      {/* Logo */}
      <div className={styles.logo}>
        <motion.div
          className={styles.logoIcon}
          whileHover={{ rotate: 180 }}
          transition={{ duration: 0.5 }}
        >
          <Waypoints size={24} />
        </motion.div>
        <div className={styles.logoText}>
          <span className={styles.logoTitle}>Ad Source Mapping</span>
          <span className={styles.logoSubtitle}>Demo</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.section}>
          <span className={styles.sectionLabel}>Main</span>
          {mainLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/overview'}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.active : ''}`
              }
            >
              <motion.div className={styles.navIcon} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <link.icon size={20} />
              </motion.div>
              <span className={styles.navLabel}>{link.label}</span>
              <div className={styles.activeIndicator} />
            </NavLink>
          ))}
        </div>

        {/* Examples subsection */}
        <div className={styles.section}>
          <button
            className={`${styles.sectionToggle} ${isExampleActive ? styles.sectionActive : ''}`}
            onClick={() => setExamplesOpen(!examplesOpen)}
          >
            <span className={styles.sectionLabel}>Examples</span>
            <motion.span
              animate={{ rotate: examplesOpen ? 0 : -90 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {examplesOpen && (
              <motion.div
                className={styles.submenu}
                variants={submenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {exampleLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `${styles.navLink} ${styles.subLink} ${isActive ? styles.active : ''}`
                    }
                  >
                    <motion.div className={styles.navIcon} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <link.icon size={18} />
                    </motion.div>
                    <span className={styles.navLabel}>{link.label}</span>
                    <div className={styles.activeIndicator} />
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </aside>
  );
}
