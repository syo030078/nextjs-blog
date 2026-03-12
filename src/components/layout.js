import { Box, Heading, Image } from '@chakra-ui/react'
// イメージのみchakra.ui導入
import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Header from './header'; // ヘッダーコンポーネントを追加


const name = 'Syo Miyata';
export const siteTitle = 'Syo Miyata';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container} style={{ margin: '0 auto', backgroundColor: 'var(--bg-primary)' }}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Syo Miyata - Software Engineer"
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
      <header className={styles.header}>
        {home ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Box>
              <Heading as="h1" size="xl" m={0} pb="0.5rem">
                {name}
              </Heading>
              <p style={{ color: 'var(--subtitle-color)', fontSize: '0.95rem', margin: 0 }}>Software Engineer</p>
            </Box>
            <Image
              borderRadius="full"
              background={'var(--avatar-bg)'}
              boxSize="64px"
              src="/images/default-avatar.svg"
              alt="Syo Miyata"
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
                background={'var(--avatar-bg)'}
                boxSize={150}
                src="/images/default-avatar.svg"
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