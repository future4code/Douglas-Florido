import React, { useState, useEffect } from 'react'
import { render } from '@testing-library/react';
import CardPequeno from '../CardPequeno/CardPequeno.js'
import axios from 'axios'


export function Contatos() {
  const [arrayMatches, setArrayMatches] = useState([])
  let i

  const allMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas/matches")
      .then((res) => {
        console.log("contato")
        console.log(res)
        console.log(res.data.matches)
        setArrayMatches(res.data.matches)
        
      })
      .catch((err) => { console.log(err) })
  }

  useEffect(() => {
    allMatches()
  })

  

    return (
      <div>
        <CardPequeno arrayMatches={arrayMatches} />
      </div>
    );


  
}


export default Contatos;