import styles from '../../styles/Home.module.css'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface PlanetInterface {
  name: string
}

const Planets = () => {
  const [planet, setPlanet] = useState<PlanetInterface>()

  const router = useRouter()
  const {pid} = router.query

  const fetchPlanet = async (planetId: string) => {
    const planetData = await (
      await fetch('https://swapi.dev/api/planets/' + planetId)
    ).json()

    setPlanet(planetData)
  }

  useEffect(() => {
    if (!pid) return

    fetchPlanet(String(pid))
  }, [pid])

  return (
    <div className={styles.container}>
      <NextSeo title={planet?.name ? 'Swapi - Planets - ' + planet.name : 'Swapi'} />

      <main className={styles.main}>
        {planet && (
          <p>{planet.name}</p>
        )}
      </main>
    </div>
  )
}

export default Planets
