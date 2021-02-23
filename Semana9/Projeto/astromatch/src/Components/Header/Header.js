import React from 'react'
import GroupIcon from '@material-ui/icons/Group';
import HomeIcon from '@material-ui/icons/Home';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export function Header(props) {
    if (props.page) {
        return (
            <Tabs aria-label="simple tabs example">
                <Tab disableRipple="true" label="Astromatch" />
                <Tab onClick={props.changePage} label={<GroupIcon />} />
            </Tabs>
        )
    }

    else {
        return (
            <Tabs aria-label="simple tabs example">
                <Tab onClick={props.changePage} label={<HomeIcon />} />
                <Tab disableRipple="true" label="Astromatch" />
            </Tabs>
        )
    }
}

export default Header;
