import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';

export function CardGrande() {
    const [age, setAge] = useState(0)
    const [bio, setBio] = useState("")
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [photo, setPhoto] = useState("")
    // const[refresh,setRefresh] = useState(0)

    useEffect(() => { getAllInformation() }, [])

    const getAllInformation = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas-florido/person')
            .then((res) => {
                // console.log(res)
                setAge(Number(res.data.profile.age))
                setBio(res.data.profile.bio)
                setId(res.data.profile.id)
                setName(res.data.profile.name)
                setPhoto(res.data.profile.photo)
            })
            .catch((err) => { console.log(err) })
            
    }

    let likeOrDislike = (swipeRightOrLeft) => {
        // const i = refresh
        getAllInformation()
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas-florido/choose-person', {
            id: id,
            choice: swipeRightOrLeft
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => { console.log(err) })
        
        // setRefresh(i+1)
    }


    
    return (
        <div>            
            
            <img src={photo}></img>
            <p>{name}</p> <p>{age}</p>
            <div>{bio}</div>

            <Button onClick={() => {likeOrDislike(false)}} >
                <CloseIcon />
            </Button>

            <Button onClick={() => {likeOrDislike(true)}}>
                <FavoriteIcon />
            </Button>
        </div>
    )
}

export default CardGrande;