import styles from '../../styles/Home.module.css'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface SpecimenInterface {
  name: string
}

const Species = () => {
  const [specimen, setSpecimen] = useState<SpecimenInterface>()

  const router = useRouter()
  const {sid} = router.query

  const fetchSpecimen = async (specimenId: string) => {
    const specimenData = await (
      await fetch('https://swapi.dev/api/species/' + specimenId)
    ).json()

    setSpecimen(specimenData)
  }

  useEffect(() => {
    if (!sid) return

    fetchSpecimen(String(sid))
  }, [sid])

  return (
    <div className={styles.container}>
      <NextSeo title={specimen?.name ? 'Swapi - Species - ' + specimen.name : 'Swapi'} />

      <main className={styles.main}>
        {specimen && (
          <p>{specimen.name}</p>
        )}
      </main>
    </div>
  )
}

export default Species
