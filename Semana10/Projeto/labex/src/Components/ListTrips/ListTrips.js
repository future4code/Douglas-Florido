import React, { useEffect, useState } from 'react'
import { retrieveTripData } from '../Requisitions/Requisitions'
import Header from '../Header/Header.js'
import axios from 'axios'



function ListTrips() {
  const [trips, setTrips] = useState([])
  const [tripDetail, setTripDetail] = useState([])

  useEffect(() => {
    allTrips()
  }, [])

  const allTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trips')
      .then((res) => {
        // console.log(res)
        // console.log(res.data.trips)
        setTrips(res.data.trips)
      })
      .catch((err) => { console.log(err) })
  }

  const getTripDetails = () => {
    // console.log("cheguei no detalhe")
    const userId = localStorage.getItem("id")
    const userToken = localStorage.getItem("token")
    // console.log("id:", userId)
    // console.log("token:", userToken)
    const headers = {
      headers: {
        auth: userToken
      }
    }
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trip/${userId}`, headers)
      .then((res) => { console.log(res) })
      .catch((err) => { console.log(err) })
  }


  if (trips !== []) {
    return (
      <>
        {trips.map((trip) => {
          return (
            <div onClick={() => getTripDetails(trip.id)}>
              <p>Name: {trip.name}</p>
              <p>Description: {trip.description}</p>
              <p>Planet: {trip.planet}</p> <p>Duration in days: {trip.durationInDays}</p> <p>Date: {trip.date}</p>
              <hr />
            </div>
          )
        })
        }
      </>
    )
  }


}

export default ListTrips;
