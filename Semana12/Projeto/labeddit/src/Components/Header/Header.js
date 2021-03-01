import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {goToFeedPage, goToLoginpage} from '../../Routes/Walker'


export const Header = () => {
    const history = useHistory()

return(
    <AppBar position="static">
        <Tabs variant="fullWidth">

        <Tab label="Labeddit" onClick={() => goToFeedPage(history)}></Tab>

        <Tab disabled/>
        <Tab disabled/>
        <Tab disabled/>
        <Tab disabled/>
        <Tab disabled/>
        <Tab disabled/>
        <Tab disabled/>
        <Tab disabled/>
        <Tab disabled/>
        <Tab disabled/>

        <Tab label="Login" onClick={() => goToLoginpage(history)}>
        
        </Tab>

        </Tabs>        
    </AppBar>
)

}