import { motion } from 'framer-motion';
import utilStyles from '../styles/utils.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Bio({ entries }) {
  return (
    <motion.section
      className={utilStyles.bioSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h3 className={utilStyles.bioHeading}>Bio</h3>
      <dl className={utilStyles.bioBody}>
        {entries.map((entry, i) => (
          <div key={i} className={utilStyles.bioEntry}>
            <dt className={utilStyles.bioYear}>{entry.year}</dt>
            <dd className={utilStyles.bioText}>{entry.text}</dd>
          </div>
        ))}
      </dl>
    </motion.section>
  );
}
