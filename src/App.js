import { AppBar, Button, Toolbar, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import APP_DRAWER from "./components/APP_DRAWER";
import APP_HOME from "./components/APP_HOME";
// import {MENU_ICON} from './components/icons/MENU_ICON'

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    marginLeft: theme.spacing(10),
    width: `calc(100% - ${theme.spacing(10)}px)`,
    zIndex: theme.zIndex.drawer,
    transition: theme.transitions.create(["width", "margin"], {
      easing: "ease",
      duration: ".35s"
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: "ease",
      duration: ".35s"
    })
  },
  menuButton: {
    height: '41px',
    width: '41px',
    fontSize: '20px',
    minWidth: '41px',
    borderRadius: '30px',
    padding: '12px 30px',
    paddingLeft: '12px',
    paddingRight: '12px',
    backgroundColor: "#fff",
    color: 'inherit',
    marginLeft: '12px',
    marginRight: '32px',
    boxShadow: theme.myShadows.button.default,
    "&:hover": {
      boxShadow: theme.myShadows.button.hover,
      backgroundColor: theme.palette.common.white
    },
    transition: theme.transitions.create(["background-color", "box-shadow"], {
      easing: theme.transitions.easInOut,
      duration: theme.transitions.duration.standard
    })
  },
  pageTitle: {

  },
  hide: {
    display: "none"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [stay, changeStay] = React.useState(false);

  const toggleDrawer = () => (open ? toggleClose() : toggleOpen());

  const toggleOpen = () => {
    setOpen(true);
    changeStay(true);
  };
  const toggleClose = () => {
    setOpen(false);
    changeStay(false);
  };
  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        color="transparent"
      >
        <Toolbar>
          <Button 
            className={classes.menuButton}
          >
            {/* <MENU_ICON></MENU_ICON> */}
            {/* <svg height="30" viewBox="0 0 21 21" width="30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd" transform="translate(3 5)"><g stroke="#2a2e3b" stroke-linecap="round" stroke-linejoin="round"><path d="m4.5 1.5h8" /><path d="m4.5 5.498h5" /><path d="m4.5 9.5h8" /></g><path d="m1.49884033 2.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z" fill="#2a2e3b" /></g></svg> */}
            <MenuIcon onClick={toggleDrawer}/>
          </Button>
          <Typography variant="h6" noWrap className={classes.pageTitle}>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <APP_DRAWER
        open={open}
        change={setOpen}
        stay={stay}
        changeStay={changeStay}
      ></APP_DRAWER>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <APP_HOME></APP_HOME>
      </main>
    </div>
  );
}
