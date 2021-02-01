
import React, { useState, useEffect } from 'react'
import axios from "axios";


function Pokecard(props) { 
    const[pokepoke,setPokepoke] = useState({})
    

    useEffect(() => {
        console.log(props)
        pegaPokemon(props.pokeName)
        
    }, [])

    const pegaPokemon = (pokeName) => {

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(response => {
                // guarda as infos do pokemon no estado
                // this.setState({ pokemon: response.data });
                // console.log(response.data)
                setPokepoke(response.data) 
                console.log(response.data)               
            })
            .catch(err => {
                console.log(err);
            });

    }

    

    return (
        <div>
            {pokepoke && <div><div>{pokepoke.name}</div>
            <div>{pokepoke.weight}</div>
            <div>{pokepoke.types[0].type.name}</div>
            <img src={pokepoke.sprites.front_default} alt={pokepoke.name} /></div>}
        </div>
    );
}

export default Pokecard;