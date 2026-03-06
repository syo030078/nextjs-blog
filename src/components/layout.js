import { Box, Heading, Image } from '@chakra-ui/react'
// イメージのみchakra.ui導入
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from './header'; // ヘッダーコンポーネントを追加


const name = 'Syo Miyata';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container} style={{ margin: '0 auto', backgroundColor: 'rgb(252, 249, 246)' }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header /> {/* ヘッダーコンポーネントを追加 */}
      <p style={{ textAlign: 'center', padding: '20px' }}>Software Engineer</p>
      <header className={styles.header}>
        {home ? (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Heading as="h1" size="xl" mt={2} p={3}>
                {name}
              </Heading>
            </Box>
            <Image
              borderRadius="full"
              background={'rgb(191, 191, 191)'}
              boxSize={150}
              src="/images/mein_soundcat_monoicon.jpeg"
              alt="Syo Miyata"
              height={70}
              width={70}
            />
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Heading as="h2" size="xl" className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </Heading>
            <Link href="/">
              <Image
                borderRadius="full"
                background={'rgb(191, 191, 191)'}
                boxSize={150}
                src="/images/mein_soundcat_monoicon.jpeg"
                alt="Syo Miyata"
                height={70}
                width={70}
              />
            </Link>
          </div>
        )}
      </header>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}