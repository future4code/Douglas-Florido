import React, { useEffect, useState } from 'react'
import { render } from '@testing-library/react';
import axios from 'axios'


export function CardPequeno(props) {
  const [matches, setMatches] = useState([])

  const allMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas/matches")
    .then((res) => {console.log(res)
    setMatches(res.data.matches)})
    .catch((err) => {console.log(err)})
  }



useEffect(() => {
  allMatches()
})

const originalArray = props.arrayMatches


return (
  <div>
    {matches.map(match => {
      console.log(match)
      return (
        <div>
          <p>{match.name}</p>
        </div>
      )
    })


    }

  </div>

)






  
}


export default CardPequeno;