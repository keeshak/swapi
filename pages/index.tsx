import Head from 'next/head'
import categories from '../json/categories.json'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <meta content="Swapi" name="description" />
        <title>Swapi</title>
      </Head>

      <main className={styles.main}>
        {!!categories?.length && (
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <a href={category.slug}>{category.name}</a>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
