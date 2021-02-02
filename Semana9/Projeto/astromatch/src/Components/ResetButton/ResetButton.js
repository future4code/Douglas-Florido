import React from 'react'
import axios from 'axios'


export function ResetButton() {

    const resetAllMatches = () =>{
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas-florido/clear')
        .then((res) =>{console.log(res)})
        .catch((err) =>{console.log(err)})
    }


    return (
        <button onClick={resetAllMatches}>
            Reset
        </button>
    )
}

export default ResetButton;