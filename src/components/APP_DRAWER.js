import { Box } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BookIcon from '@material-ui/icons/Book';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import clsx from 'clsx';
import React from 'react';
import MyTheme from '../theme.js'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  siteIcon: {
    padding: theme.spacing(1)
  },
  drawer: {
    width: drawerWidth,
    //height: "100%",
    flexShrink: 0,
    whiteSpace: 'nowrap',
    //boxShadow: theme.myShadows.drawer
  },
  drawerPaper: {
    boxShadow: theme.myShadows.drawer
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerIcon: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  divider: {
    position: "absolute",
    width: `calc(100% - ${theme.spacing(4)}px)`,
    right: theme.spacing(2)
  }
}))

export default function APP_DRAWER(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { open, change, stay, changeStay } = props;
  const setToOpen = () => !stay ? change(true) : {};
  const setToClose = () => !stay ? change(false) : {};

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, { [classes.drawerOpen]: open, [classes.drawerClose]: !open, })}
      classes={{
        paper: clsx(
          {[classes.drawerOpen]: open, [classes.drawerClose]: !open},
          classes.drawerPaper
          ),
      }}
      onMouseEnter={setToOpen} onMouseLeave={setToClose}
    //PaperProps={{'box-shadow': theme.myShadows.drawer}}
    >
      <div className={classes.toolbar}>
        <List>
          <ListItem button align="center">
            <ListItemIcon className={classes.siteIcon}>
              <BookIcon></BookIcon>
            </ListItemIcon>
            <ListItemText>Log Tool</ListItemText>
          </ListItem>
        </List>

      </div>
      <Box>
        <Divider className={classes.divider} />
      </Box>

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text} align="center">
            <ListItemIcon className={classes.drawerIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Box>
        <Divider className={classes.divider} />
      </Box>

      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon className={classes.drawerIcon}>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};