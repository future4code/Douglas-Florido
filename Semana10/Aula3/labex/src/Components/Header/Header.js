import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


function Header() {
  return (

    <div>
      
        <Tabs>          
            <Tab label="ApplicationFormPage" />              
            <Tab label="Home" />                   
            <Tab label="CreateTripPage" />         
        </Tabs>

        
      
    </div>
  );
}

export default Header;
