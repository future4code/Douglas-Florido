import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';





export function CardGrande() {
    const [id, setId] = useState("")
    const [photoURL, setPhotoURL] = useState("")
    const [age, setAge] = useState(0)
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")

    useEffect(() => {
        allProfile()

    }, [])

    const allProfile = () => {

        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas/person")
            .then((res) => {
                // console.log(res)
                setId(res.data.profile.id)
                setPhotoURL(res.data.profile.photo)
                setAge(Number(res.data.profile.age))
                setName(res.data.profile.name)
                setBio(res.data.profile.bio)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const likeOrDislike = async (idComing, decision) => {
        // console.log(idComing)
        // console.log(decision)
        if (decision) {
            try {
                const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas/choose-person`,
                    {
                        id: { idComing },
                        choice: true
                    }
                )
                console.log(response)
            }
            catch (err) { console.log(err) }




        }

        else {
            try {
                const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/douglas/choose-person",
                    {
                        id: { idComing },
                        choice: false
                    })
                console.log(response)
            }

            catch (err) { console.log(err) }
        }
        allProfile()
    }



    // state = {
    //     id: "",
    //     fotoURL: "",
    //     idade: 0,
    //     nome: "",
    //     descricao: ""
    // }    



    // componentDidMount = () => {
    //     this.allProfiles()
    // }


    // componentDidUpdate = () => {
    //     this.allProfiles()
    // }  
    return (
        <div>
            <Card>

                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    src={photoURL}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>

                    <Typography>
                        {age}
                    </Typography>

                    <Typography variant="body2" color="textSecondary" component="p">
                        {bio}
                    </Typography>

                </CardContent>


                <CardActions>
                    <Button onClick={() => { likeOrDislike(id, false) }}>
                        <CloseIcon />
                    </Button>
                    <Button onClick={() => { likeOrDislike(id, true) }}>
                        <FavoriteIcon />
                    </Button>

                </CardActions>

            </Card>
        </div>
    );
}


export default CardGrande;