import { useEffect, useState } from 'react'

interface FilmsInterface {
  results: [
    {
      title: string
      url: string
    }
  ]
}

export const Films = () => {
  const [films, setFilms] = useState<FilmsInterface>()

  const fetchFilms = async () => {
    const filmData = await (
      await fetch('https://swapi.dev/api/films/')
    ).json()

    setFilms(filmData)
  }

  useEffect(() => {
    fetchFilms()
  }, [])

  return (
    <ul>
      {films && films.results && films.results.map((film, index) => (
        <li key={index}>
          <a href={film.url.substring(film.url.lastIndexOf('films/'))}>{film.title}</a>
        </li>
      ))}
    </ul>
  )
}
