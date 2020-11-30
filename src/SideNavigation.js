import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ErrorRoundedIcon from "@material-ui/icons/ErrorRounded";
import AccountBalanceRoundedIcon from "@material-ui/icons/AccountBalanceRounded";
import PageviewRoundedIcon from "@material-ui/icons/PageviewRounded";

import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import StorageRoundedIcon from "@material-ui/icons/StorageRounded";
import LanguageRoundedIcon from "@material-ui/icons/LanguageRounded";

import FindInPageRoundedIcon from "@material-ui/icons/FindInPageRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  hamburger: {
    color: "white",
  },
  sideNav: {
    zIndex: 5,
    float: "left",
  },
});

const homeIcons = [
  <AccountBalanceRoundedIcon />,
  <ErrorRoundedIcon />,
  <PageviewRoundedIcon />,
];

const dashboardIcons = [
  <CancelRoundedIcon />,
  <StorageRoundedIcon />,
  <LanguageRoundedIcon />,
];

const rootIcons = [<FindInPageRoundedIcon />, <HelpRoundedIcon />];

export default function SideNavigation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          Home
        </ListSubheader>
        {["Asset Overview", "Incident Summary", "Search By"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <ListItemIcon>{homeIcons[index]}</ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        <ListSubheader component="div" id="nested-list-subheader">
          Dashboard
        </ListSubheader>
        {[
          "Threat Landscape",
          "Data Movement",
          "Web Application & Vulnerability",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{dashboardIcons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Advance Search", "Help & Support"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{rootIcons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.sideNav}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuRoundedIcon className={classes.hamburger} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
