import styles from '../../styles/Home.module.css'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface FilmInterface {
  title: string
}

const Films = () => {
  const [film, setFilm] = useState<FilmInterface>()

  const router = useRouter()
  const {fid} = router.query

  const fetchFilm = async (filmId: string) => {
    const filmData = await (
      await fetch('https://swapi.dev/api/films/' + filmId)
    ).json()

    setFilm(filmData)
  }

  useEffect(() => {
    if (!fid) return

    fetchFilm(String(fid))
  }, [fid])

  return (
    <div className={styles.container}>
      <NextSeo title={film?.title ? 'Swapi - Films - ' + film.title : 'Swapi'} />

      <main className={styles.main}>
        {film && (
          <p>{film.title}</p>
        )}
      </main>
    </div>
  )
}

export default Films
