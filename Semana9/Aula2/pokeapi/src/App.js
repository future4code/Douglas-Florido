
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from "axios";
import Pokecard from './Componentes/Pokecard/Pokecard';




function App() {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")


  const listarPokemons = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results)
        console.log(response.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }  

  useEffect(() => {
    listarPokemons()
  }, [])

  let changePokeName = (event) =>{
    setPokeName(event.target.value)
    // console.log(event.target.value)
  }

  return (
    <div>
      <select onChange={changePokeName}>
        <option ></option>
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          )
        })}
      </select>
      {pokeName && <Pokecard pokeName={pokeName} />}

    </div>
  );
}

export default App;
