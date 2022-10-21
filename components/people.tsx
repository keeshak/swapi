import { useEffect, useState } from 'react'

interface PeopleInterface {
  results: [
    {
      name: string
      url: string
    }
  ]
}

export const People = () => {
  const [people, setPeople] = useState<PeopleInterface>()

  const fetchPeople = async () => {
    const peopleData = await (
      await fetch('https://swapi.dev/api/people/')
    ).json()

    setPeople(peopleData)
  }

  useEffect(() => {
    fetchPeople()
  }, [])

  return (
    <ul>
      {people && people.results && people.results.map((person, index) => (
        <li key={index}>
          <a href={person.url.substring(person.url.lastIndexOf('people/'))}>{person.name}</a>
        </li>
      ))}
    </ul>
  )
}
