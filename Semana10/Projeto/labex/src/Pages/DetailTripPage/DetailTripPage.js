import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header.js'
import { createLogin } from '../../Components/Requisitions/Requisitions.js'
import axios from 'axios'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { goToDetailTripPage } from '../../Routes/Walker'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth: 300,
        marginTop: 20,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 26,
    },
    body: {
        marginTop: 12,
        marginBottom: 12,
    },
});

const AllPage = styled.div`
background-image:url("./images/Cvms2GQQ.jpg");
height:99vh;
width:99.3vw;
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 
`

function DetailTripPage() {
    const classes = useStyles();
    const [tripDetail, setTripDetail] = useState([])


    useEffect((res) => {
        getTripDetails()
    }, [])

    const getTripDetails = () => {
        // console.log("cheguei no detalhe")
        // const userId = localStorage.getItem("id")
        const userToken = localStorage.getItem("token")
        const tripId = localStorage.getItem("tripId")
        // console.log("id:", userId)
        // console.log("token:", userToken)
        const headers = {
            headers: {
                auth: userToken
            }
        }
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trip/${tripId}`, headers)
            .then((res) => {
                // console.log(res)
                setTripDetail(res.data.trip.candidates)
            })
            .catch((err) => { console.log(err) })
    }

    return (
        <AllPage>
            <Header />
            <Grid container spacing={6} justify="center">
                {tripDetail.map((candidate) => {
                        return (
                            <Grid item>
                                <Card className={classes.root}>
                                    <CardContent>
                                        <Typography class={classes.title}>{candidate.name}</Typography>
                                        <Typography className={classes.body}>Age: {candidate.age}</Typography> < Typography className={classes.body}>Profession: {candidate.profession}</Typography><Typography className={classes.body}>Country: {candidate.country}</Typography>
                                        <Typography className={classes.body}>{candidate.applicationText}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        )
                    })}
            </Grid>
        </AllPage>

    );
}

export default DetailTripPage;
