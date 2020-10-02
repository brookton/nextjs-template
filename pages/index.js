import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSwr from 'swr'
import Link from 'next/link'


// Socail Cards Info
// The minimum size you should use is 200 x 200 pixels
// Images smaller than 600 x 315 pixels will often be styled differently on 
// Facebook and Twitter (it will be on the side of the link text, rather than big and in the middle of everything)
// For most cards that appear on Twitter and Facebook, images that are 1200 x 630 pixels have the best display on high resolution
// https://www.learnwithjason.dev/blog/auto-generate-social-image/

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const { data, error } = useSwr('/api/users', fetcher)

  if (error) return <div><Head><title>Failed to load users</title></Head></div>
  if (!data) return <div><Head><title>Loading...</title></Head></div>

  return (
    <div className={styles.container}>
      <Head>
        {/* Twitter Social Card*/}
        {/* <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" /> */}

        {/* Open Graph Social Card */}
        {/* <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" /> */}
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
      <p className={styles.text}>
        To test the CORS route, open the console in a new tab on a different
        domain and make a POST / GET / OPTIONS request to <b>/api/cors</b>. Using
        a different method from those mentioned will be blocked by CORS
      </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          <ul>
          {data.map((user) => (
            <li key={user.id}>
              <Link href="/user/[id]" as={`/user/${user.id}`}>
                <a>{`User ${user.id}`}</a>
              </Link>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  )
}
