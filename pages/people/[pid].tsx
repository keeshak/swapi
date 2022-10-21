import styles from '../../styles/Home.module.css'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface PersonInterface {
  name: string
}

const People = () => {
  const [person, setPerson] = useState<PersonInterface>()

  const router = useRouter()
  const {pid} = router.query

  const fetchPerson = async (personId: string) => {
    const personData = await (
      await fetch('https://swapi.dev/api/people/' + personId)
    ).json()

    setPerson(personData)
  }

  useEffect(() => {
    if (!pid) return

    fetchPerson(String(pid))
  }, [pid])

  return (
    <div className={styles.container}>
      <NextSeo title={person?.name ? 'Swapi - People - ' + person.name : 'Swapi'} />

      <main className={styles.main}>
        {person && (
          <p>{person.name}</p>
        )}
      </main>
    </div>
  )
}

export default People
