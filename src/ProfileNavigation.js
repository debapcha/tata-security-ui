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
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SettingsApplicationsIcon from "@material-ui/icons/SettingsApplications";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import FeedbackRoundedIcon from "@material-ui/icons/FeedbackRounded";
import PermContactCalendarRoundedIcon from "@material-ui/icons/PermContactCalendarRounded";
import MeetingRoomRoundedIcon from "@material-ui/icons/MeetingRoomRounded";
import RoomServiceRoundedIcon from "@material-ui/icons/RoomServiceRounded";

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
  rightNav: {
    zIndex: 5,
    order: 2,
    marginLeft: "auto",
    marginRight: "40px",
  },
});

const homeIcons = [
  <RoomServiceRoundedIcon />,
  <VpnKeyRoundedIcon />,
  <FeedbackRoundedIcon />,
  <SettingsApplicationsIcon />,
  <PermContactCalendarRoundedIcon />,
  <MeetingRoomRoundedIcon />,
];

export default function ProfileNavigation() {
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
          Profile Information
        </ListSubheader>
        {[
          "Services Subscribed",
          "Change Password",
          "Feedback",
          "Settings",
          "Contact Us",
          "Log Out",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <ListItemIcon>{homeIcons[index]}</ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.rightNav}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <AccountCircleIcon className={classes.hamburger} />
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
