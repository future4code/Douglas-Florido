import React, {useEffect, useState} from 'react'
import axios from 'axios'




export function SmallCard() {
    const[matches, setMatches] = useState([])

    let getAllMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas-florido/matches')
        .then((res) => {console.log(res)
            setMatches(res.data.matches)})
        .catch((err) => {console.log(err)})
    }

    useEffect(() => {
    getAllMatches()
    }, [])


   

    return(
        matches.map((match) => {
            return(
                <div>
                <img src={match.photo}/><p>{match.name}</p>
                </div>
            )
        })        
                    
    )
}

export default SmallCard;