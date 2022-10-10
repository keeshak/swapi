import categories from '../../json/categories.json'
import styles from '../../styles/Home.module.css'
import { Films } from '../../components/films'
import { NextSeo } from 'next-seo'
import { People } from '../../components/people'
import { Planets } from '../../components/planets'
import { Species } from '../../components/species'
import { Starships } from '../../components/starships'
import { Vehicles } from '../../components/vehicles'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface CategoryInterface {
  name: string
  slug: string
}

interface OverviewInterface {
  category: string
}

const Category = () => {
  const [category, setCategory] = useState<CategoryInterface>()

  const router = useRouter()
  const {cid} = router.query

  useEffect(() => {
    if (!cid) return

    const categoryObject = categories.filter(categoryItem => categoryItem.slug === cid)

    setCategory(categoryObject[0])
  }, [cid])

  const Overview = (props: OverviewInterface) => {
    switch (props.category) {
      case 'films':
        return (<Films />)
      case 'people':
        return (<People />)
      case 'planets':
        return (<Planets />)
      case 'species':
        return (<Species />)
      case 'starships':
        return (<Starships />)
      case 'vehicles':
        return (<Vehicles />)
    }

    return (<></>)
  }

  return (
    <div className={styles.container}>
      <NextSeo title={category?.name ? 'Swapi - ' + category.name : 'Swapi'} />

      <main className={styles.main}>
        {category?.slug && (
          <Overview category={category.slug} />
        )}
      </main>
    </div>
  )
}

export default Category
