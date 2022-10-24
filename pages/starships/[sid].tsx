import styles from '../../styles/Home.module.css'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface StarshipInterface {
  name: string
}

const Starships = () => {
  const [starship, setStarship] = useState<StarshipInterface>()

  const router = useRouter()
  const {sid} = router.query

  const fetchStarship = async (starshipId: string) => {
    const starshipData = await (
      await fetch('https://swapi.dev/api/starships/' + starshipId)
    ).json()

    setStarship(starshipData)
  }

  useEffect(() => {
    if (!sid) return

    fetchStarship(String(sid))
  }, [sid])

  return (
    <div className={styles.container}>
      <NextSeo title={starship?.name ? 'Swapi - Starships - ' + starship.name : 'Swapi'} />

      <main className={styles.main}>
        {starship && (
          <p>{starship.name}</p>
        )}
      </main>
    </div>
  )
}

export default Starships
