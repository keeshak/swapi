import { useEffect, useState } from 'react'

interface VehiclesInterface {
  results: [
    {
      name: string
      url: string
    }
  ]
}

export const Vehicles = () => {
  const [vehicles, setVehicles] = useState<VehiclesInterface>()

  const fetchVehicles= async () => {
    const vehiclesData = await (
      await fetch('https://swapi.dev/api/vehicles/')
    ).json()

    setVehicles(vehiclesData)
  }

  useEffect(() => {
    fetchVehicles()
  }, [])

  return (
    <ul>
      {vehicles && vehicles.results && vehicles.results.map((vehicle, index) => (
        <li key={index}>
          <a href={vehicle.url.substring(vehicle.url.lastIndexOf('vehicles/'))}>{vehicle.name}</a>
        </li>
      ))}
    </ul>
  )
}
