import React from 'react'
import Header from '../../Components/Header/Header.js'
import ListTrips from '../../Components/ListTrips/ListTrips.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { populateTrips } from '../../Components/Requisitions/Requisitions'
import { Grid} from '@material-ui/core'
import styled from 'styled-components'


const AllPage = styled.div`
background-image:url("./images/Cvms2GQQ.jpg");
height:99vh;
width:99.3vw;
background-position: center; 
background-repeat: no-repeat; 
background-size: cover; 

`

function MainPage() {
  return (
    <AllPage>
      <Header />
      <Grid container spacing={4} justify="center">
        
          <ListTrips />
        
        {/* <button onClick={populateTrips}>populate</button> */}
      </Grid>
    </AllPage>
  );
}

export default MainPage;
