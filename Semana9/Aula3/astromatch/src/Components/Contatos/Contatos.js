import React, { useState, useEffect } from 'react'
import { render } from '@testing-library/react';
import CardPequeno from '../CardPequeno/CardPequeno.js'
import axios from 'axios'


export function Contatos() {
  const [arrayMatches, setArrayMatches] = useState([])
  let i

  const allMatches = () => {
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/matches")
      .then((res) => {
        setArrayMatches(res.data.matches)
        console.log(res.data.matches)
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