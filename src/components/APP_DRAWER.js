import { Box, Paper, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import BookIcon from "@material-ui/icons/Book";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import clsx from "clsx";
import React from "react";
import theme from "../theme";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  headingIcon: {
    color: 'inherit',
    float: 'left',
    width: '30px',
    display: 'inline-block',
    opacity: '1',
    marginTop: '7px',
    maxHeight: '30px',
    textAlign: 'center',
    transition: 'all 300ms linear',
    marginLeft: '22px',
    marginRight: "18px"
  },
  headingText: {
    display: 'block',
    padding: '5px 0',
    overflow: 'hidden',
    fontSize: '18px',
    transform: 'translate3d(0px 0 0)',
    transition: 'all 300ms linear',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: '400',
    fontHeight: '30px',
    whitespace: 'nowrap',
    textTransform: 'upercase'
  },
  headingBox: {
    margin: '0',
    display: 'block',
    padding: '15px 0',
    position: 'relative',
    "&:after": {
      right: '15px',
      width: 'calc(100% - 30px)',
      bottom: '0',
      height: '1px',
      content: "",
      position: 'absolute',
      backgroundColor: "hsla(0,0%,100%,.3)"
    }
  },
    drawer: {
    width: drawerWidth,
    //height: "100%",
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerPaper: {
    boxShadow: theme.myShadows.drawer
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: "ease",
      duration: ".35s"
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: "ease",
      duration: ".35s"
    }),
    //overflowX: "hidden",
    width: theme.spacing(10),
  },
  drawerIcon: {
    top: "3px",
    color: "inherit",
    float: "left",
    width: "30px",
    height: "24px",
    opacity: "0.8",
    position: "inherit",
    textAlign: "center",
    marginRight: '15px',
    verticalAlign: "middle",
    minWidth: "0"
  },
  drawerListItem: {
    color: "inherit",
    padding: "0",
    margin: "0",
    display: "block",
    position: "relative",
  },
  drawerLIText: {
    height: 'auto',
    margin: '0',
    display: 'block',
    opacity: '1',
    padding: "0 " + theme.spacing(2) + "px !important",
    position: 'relative',
    transform: 'translate3d(0px, 0, 0)',
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
    lineHeight: '30px',

  },
  drawerLITextClosed: {
    opacity: '0',
    transform: "translate3d(-25px, 0, 0)"
  },
  drawerLIPaper: {
    width: "auto",
    margin: "10px 15px 0",
    display: "block",
    padding: "10px",
    position: "relative",
    transition: "all 300ms linear",
    fontWeight: "300",
    lineHeight: "1.5em",
    borderRadius: "3px",
    "&:hover": {
      backgroundColor: theme.myPalette.action.hover
    }
  },
  drawerLIPaperClose: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    position: "relative",
    width: `calc(100% - ${theme.spacing(2.5)}px)`,
    transition: "all 300ms linear",
    "&:hover": {
      backgroundColor: theme.myPalette.action.hover
    }
  },
  divider: {
    position: "absolute",
    width: `calc(100% - ${theme.spacing(4)}px)`,
    right: theme.spacing(2)
  }
}));

export default function APP_DRAWER(props) {
  const classes = useStyles();
  const { open, change, stay } = props;
  const setToOpen = () => (!stay ? change(true) : {});
  const setToClose = () => (!stay ? change(false) : {});

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open
      })}
      classes={{
        paper: clsx(
          { [classes.drawerOpen]: open, [classes.drawerClose]: !open },
          classes.drawerPaper
        )
      }}
      onMouseEnter={setToOpen}
      onMouseLeave={setToClose}
    >
      <div className={classes.toolbar}>
        <Box className={classes.headingBox}>
          <BookIcon className={classes.headingIcon}></BookIcon>
          <Typography className={clsx(classes.headingText, {[classes.drawerLITextClosed] : !open})}>Log Tool</Typography>
        </Box>
      </div>
      <Box>
        <Divider className={classes.divider} />
      </Box>

      <List>
        {["Inbox", "Starred", "Send email", "Drafts","All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem
            key={text}
            disableGutters
            className={classes.drawerListItem}
          >
            <Paper elevation={0} className={classes.drawerLIPaper}>
                {index % 2 === 0 ? <InboxIcon className={classes.drawerIcon} /> : <MailIcon className={classes.drawerIcon}/>}
              <ListItemText
                primaryTypographyProps={{
                  classes: {
                    body1: clsx(classes.drawerLIText, {[classes.drawerLITextClosed] : !open})
                  }
                }}
                className={clsx(classes.drawerLIText, {[classes.drawerLITextClosed] : !open})}
                primary={text} />
            </Paper>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
