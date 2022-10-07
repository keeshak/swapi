import Head from 'next/head'
import categories from '../json/categories.json'
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <title>Swapi</title>
      </Head>

      <main className={styles.main}>
        {!!categories?.length && (
          <ul>
            {categories.map((category, index) => (
              <li key={index}>
                <a href={'category/' + category.slug}>{category.name}</a>
              </li>
            ))}
          </ul>
        )}
      </main>
    </div>
  )
}

export default Home
