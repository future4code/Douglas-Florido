import React from 'react'
import Header from '../../Components/Header/Header.js'
import ListTrips from '../../Components/ListTrips/ListTrips.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {populateTrips} from '../../Components/Requisitions/Requisitions'
function MainPage() {
  return (
    <div>
      <Header/>
      <ListTrips/>
      {/* <button onClick={populateTrips}>populate</button> */}
    </div>
  );
}

export default MainPage;
