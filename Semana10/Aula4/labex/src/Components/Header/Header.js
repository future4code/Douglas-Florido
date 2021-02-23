import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import {goToApplicationFormPage, goToMainPage, goToTripPage} from '../../Routes/Walker.js'
import {useHistory}  from "react-router-dom";

function Header() {
  const history = useHistory()

  return (

    <div>
      
        <Tabs>          
            <Tab label="ApplicationFormPage" onClick={()=>{goToApplicationFormPage(history)}}/>              
            <Tab label="Home" onClick={()=>{goToMainPage(history)}}/>                   
            <Tab label="CreateTripPage" onClick={()=>{goToTripPage(history)}}/>         
        </Tabs>        
      
    </div>
  );
}

export default Header;
