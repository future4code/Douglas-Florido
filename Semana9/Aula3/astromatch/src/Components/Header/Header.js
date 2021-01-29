import React from 'react'
import { render } from '@testing-library/react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import { StyledToolBar, StyledButton, Image } from "./Header-style";

export function Header(props) {
    const pagina = props.page
    if (props.page) {
        return (
            <div>
                <Tabs aria-label="simple tabs example">

                    <Tab label="" />
                    <Tab label="Item Two" />
                    <Tab onClick={props.changePage} label={<GroupIcon />} />
                </Tabs>
                <hr/>
            </div>
        );
    }

    else {
        return (
            // <AppBar position="sticky">
            //     <StyledToolBar>
            //         <Image onClick={this.props.goHome}
            //             src="https://i.imgur.com/qlhep1q.png"
            //             alt="logo"
            //         >
            //         </Image>
            //         <StyledButton onClick={this.props.handleHomePage}>Venda Você também</StyledButton>
            //     </StyledToolBar>
            // </AppBar>
            <div>
                <Tabs aria-label="simple tabs example">
                    <Tab onClick={props.changePage} label={<HomeIcon />} />
                    <Tab label="" />
                    <Tab label="Item Two" />
                </Tabs>

                <hr/>

            </div>
        );
    }
}


export default Header;