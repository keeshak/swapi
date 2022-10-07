import Head from 'next/head'
import categories from '../../json/categories.json'
import styles from '../../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Category = () => {
  const [category, setCategory] = useState({
    name: '',
  })

  const router = useRouter()
  const { cid } = router.query

  useEffect(() => {
    if (!cid) return

    const categoryObject = categories.filter(categoryItem => categoryItem.slug === cid)

    setCategory(categoryObject[0])
  }, [cid])

  return (
    <div className={styles.container}>
      <Head>
        <title>Swapi - {category?.name}</title>
      </Head>

      <main className={styles.main}>
        {category?.name}
      </main>
    </div>
  )
}

export default Category
