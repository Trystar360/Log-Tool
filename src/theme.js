import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  // typography: {
  //   "fontFamily": `'Nunito', sans-serif;`,
  //   "fontSize": 14,
  //   "fontWeightLight": 300,
  //   "fontWeightRegular": 400,
  //   "fontWeightMedium": 500
  //   },
  palette: {
    primary: {
      main: "#27B1BE",
    },
    secondary: {
      main: "#FACC2E"
    },
    background: {
      default: "#ECECEC",
      paper: "#F5F5F5"
    }

  },
  myPalette: {
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
      default: "#eee"
    },
    action: {
      hover: "rgba(200, 200, 200, 0.2)"
    }
  },
  myShadows: {
    button: {
      default: "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
      hover: "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)",
      color: (_color) => {
        return `0 2px 2px 0 rgba(${_color}, 0.14), 0 3px 1px -2px rgba(${_color}, 0.2), 0 1px 5px 0 rgba(${_color}, 0.12)`},
      hoverColor: (_color) => {
        return `0 14px 26px -12px rgba(${_color}, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(${_color}, 0.2)`}
    },
    drawer:
      "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  myTransitions: {}
});

console.log(theme)

export default theme;

