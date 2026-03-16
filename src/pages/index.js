import Head from 'next/head';
import Layout from '../components/layout';
import Bio from '../components/bio';
import { siteTitle } from '../lib/constants';
import utilStyles from '../styles/utils.module.css';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.5 }}
      >
        <a href="http://54.250.46.74/" target="_blank" rel="noopener noreferrer" className={utilStyles.portfolioCard}>
          <div className={utilStyles.portfolioCardPlaceholder}>
            <div className={utilStyles.portfolioCardOverlay}>
              <span className={utilStyles.portfolioAppName}>Music Work</span>
              <span className={utilStyles.portfolioTagline}>音楽家と依頼者をつなぐマッチングサービス</span>
            </div>
          </div>
        </a>
      </motion.section>

      <Bio entries={[
        { year: '1989', text: 'Born in Aichi, Japan' },
      ]} />
    </Layout>
  );
}
