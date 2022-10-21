import { useEffect, useState } from 'react'

interface PlanetsInterface {
  results: [
    {
      name: string
      url: string
    }
  ]
}

export const Planets = () => {
  const [planets, setPlanets] = useState<PlanetsInterface>()

  const fetchPlanets = async () => {
    const planetsData = await (
      await fetch('https://swapi.dev/api/planets/')
    ).json()

    setPlanets(planetsData)
  }

  useEffect(() => {
    fetchPlanets()
  }, [])

  return (
    <ul>
      {planets && planets.results && planets.results.map((planet, index) => (
        <li key={index}>
          <a href={planet.url.substring(planet.url.lastIndexOf('planets/'))}>{planet.name}</a>
        </li>
      ))}
    </ul>
  )
}
