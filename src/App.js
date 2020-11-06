import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import React from "react";
import APP_DRAWER from "./components/APP_DRAWER";
import APP_HOME from "./components/APP_HOME";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    marginLeft: theme.spacing(10),
    width: `calc(100% - ${theme.spacing(10)}px)`,
    zIndex: theme.zIndex.drawer,
    transition: theme.transitions.create(["width","margin"], {
      easing: "ease",
      duration: ".35s"
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width","margin"], {
      easing: "ease",
      duration: ".35s"
    })
  },
  menuButton: {
    marginRight: theme.spacing(3),
    backgroundColor: theme.palette.common.white,
    // transition: "0.2s cubic-bezier(.4,0,1,1)",
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
        elevation="0"
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
        color="transparent"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={classes.menuButton}
            elevation={2}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6" noWrap>
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
