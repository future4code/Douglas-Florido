import React from 'react'
import Header from '../../Components/Header/Header.js'
import ListTrips from '../../Components/ListTrips/ListTrips.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Header/>
      <ListTrips/>
    </div>
  );
}

export default MainPage;
