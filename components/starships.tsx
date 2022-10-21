import { useEffect, useState } from 'react'

interface StarshipsInterface {
  results: [
    {
      name: string
      url: string
    }
  ]
}

export const Starships = () => {
  const [starships, setStarships] = useState<StarshipsInterface>()

  const fetchStarship = async () => {
    const starshipsData = await (
      await fetch('https://swapi.dev/api/starships/')
    ).json()

    setStarships(starshipsData)
  }

  useEffect(() => {
    fetchStarship()
  }, [])

  return (
    <ul>
      {starships && starships.results && starships.results.map((starship, index) => (
        <li key={index}>
          <a href={starship.url.substring(starship.url.lastIndexOf('starships/'))}>{starship.name}</a>
        </li>
      ))}
    </ul>
  )
}
