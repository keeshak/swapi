import styles from '../../styles/Home.module.css'
import { NextSeo } from 'next-seo'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface VehicleInterface {
  name: string
}

const Vehicles = () => {
  const [vehicle, setVehicle] = useState<VehicleInterface>()

  const router = useRouter()
  const {vid} = router.query

  const fetchVehicle = async (vehicleId: string) => {
    const vehicleData = await (
      await fetch('https://swapi.dev/api/vehicles/' + vehicleId)
    ).json()

    setVehicle(vehicleData)
  }

  useEffect(() => {
    if (!vid) return

    fetchVehicle(String(vid))
  }, [vid])

  return (
    <div className={styles.container}>
      <NextSeo title={vehicle?.name ? 'Swapi - Vehicles - ' + vehicle.name : 'Swapi'} />

      <main className={styles.main}>
        {vehicle && (
          <p>{vehicle.name}</p>
        )}
      </main>
    </div>
  )
}

export default Vehicles
