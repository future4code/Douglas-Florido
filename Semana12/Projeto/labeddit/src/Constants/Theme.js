import { createMuiTheme} from '@material-ui/core/styles'
import {primaryColor, neutralColor} from './Colors'

export const theme = createMuiTheme({
    palette: {
        primary: {
            main:primaryColor,
            contrastText:'white'
        },
        text: {
            primary: neutralColor
        }
    }
})

export default theme