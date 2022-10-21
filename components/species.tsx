import { useEffect, useState } from 'react'

interface SpeciesInterface {
  results: [
    {
      name: string
      url: string
    }
  ]
}

export const Species = () => {
  const [species, setSpecies] = useState<SpeciesInterface>()

  const fetchSpecies = async () => {
    const speciesData = await (
      await fetch('https://swapi.dev/api/species/')
    ).json()

    setSpecies(speciesData)
  }

  useEffect(() => {
    fetchSpecies()
  }, [])

  return (
    <ul>
      {species && species.results && species.results.map((specimen, index) => (
        <li key={index}>
          <a href={specimen.url.substring(specimen.url.lastIndexOf('species/'))}>{specimen.name}</a>
        </li>
      ))}
    </ul>
  )
}
