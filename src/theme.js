import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F2CB05",
            dark: "#a98e03",
            light: "#f4d537"
        },
        secondary: {
            main: "#0D0D0D",
            dark: "#090909",
            light: "3d3d3d"
        },
        background: {
            default: '#eee'
        }
    },
    myShadows: {
        button: {
            default: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
            hover: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
        },
        drawer: "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    myTransitions: {

    }
})

export default theme;