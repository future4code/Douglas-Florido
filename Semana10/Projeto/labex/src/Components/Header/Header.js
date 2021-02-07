import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import {goToApplicationFormPage, goToMainPage, goToTripPage} from '../../Routes/Walker.js'
import {useHistory}  from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';



function Header() {
  const history = useHistory()

  return (

    <AppBar position="static">        
        <Tabs variant="fullWidth">          
            <Tab textColor="primary" label="Apply Now"  onClick={()=>{goToApplicationFormPage(history)}}/>              
            <Tab icon={<HomeIcon/>} onClick={()=>{goToMainPage(history)}}/>                   
            <Tab label="Create Trip" onClick={()=>{goToTripPage(history)}}/>         
        </Tabs>     
    </AppBar>
  );
}

export default Header;
