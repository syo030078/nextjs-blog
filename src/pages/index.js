import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
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
              <span className={utilStyles.portfolioAppName}>Portfolio App</span>
              <span className={utilStyles.portfolioTagline}>エンジニアの実績を、一目で伝えるアプリ</span>
            </div>
          </div>
        </a>
      </motion.section>
    </Layout>
  );
}
