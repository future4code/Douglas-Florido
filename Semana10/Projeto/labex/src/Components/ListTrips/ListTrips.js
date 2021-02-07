import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { goToDetailTripPage } from '../../Routes/Walker'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';

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
    fontSize: 20,
  },
  body: {
    marginTop: 12,
    marginBottom: 12,
  },
});



function ListTrips() {
  const classes = useStyles();
  const [trips, setTrips] = useState([])
  const [tripDetail, setTripDetail] = useState([])
  const history = useHistory()

  useEffect(() => {
    allTrips()
  }, [])

  const allTrips = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-florido/trips')
      .then((res) => {
        // console.log(res)
        // console.log(res.data.trips)
        setTrips(res.data.trips)
      })
      .catch((err) => { console.log(err) })
  }




  if (trips !== []) {
    return (
      <>
        {trips.map((trip) => {
          return (
            <Grid item>
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} >{trip.name}</Typography >
                  <Typography className={classes.body}>{trip.description}</Typography>
                  <Typography className={classes.body}>Planet: {trip.planet}</Typography> <Typography>Duration: {trip.durationInDays} Days</Typography> <Typography>Date: {trip.date}</Typography>
                  <Button variant="contained" color="primary" onClick={() => goToDetailTripPage(history, trip.id)}>Candidates</Button>
                </CardContent>
              </Card>
            </Grid>
          )
        })
        }
      </>
    )
  }


}

export default ListTrips;
