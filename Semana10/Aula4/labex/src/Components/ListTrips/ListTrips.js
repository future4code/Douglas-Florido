import React, { useState } from 'react'
import {retrieveTripData} from '../Requisitions/Requisitions'
import Header from '../Header/Header.js'

function ListTrips() {
  const [trips, setTrips] = useState({})

  
  console.log(trips)
  retrieveTripData(setTrips)
  let arrayTrips = trips.data
  

  return (
    arrayTrips.map((trip) => {
      return(
        <div>
          <div>{trip.name}</div>
        </div>
      )
    })
  );
}

export default ListTrips;
