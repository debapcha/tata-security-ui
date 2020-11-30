import React, { useEffect } from "react";
import { ReactBingmaps } from "react-bingmaps";
import { makeStyles } from "@material-ui/core";
import "./App.css";
import SideNavigation from "./SideNavigation";
import ProfileNavigation from "./ProfileNavigation";
import Map from "./Map";
import SearchBox from "./SearchBox";

const useStyles = makeStyles({
  map: {
    position: "absolute",
  },
});

const pushPinLatLong = [
  [12.12, 76.68],
  [48.8566, 2.3522],
  [39.9042, 116.4074],
  [41.9028, 12.4964],
  [32.4279, 53.688],
  [4.0383, 21.7587],
  [15.87, 100.9925],
  [26.85, 80.949997],
];

function App() {
  const classes = useStyles();
  return (
    <>
      <div className="main-app">
        <SideNavigation />
        <ProfileNavigation />
        <SearchBox />
        <Map
          apiKey={process.env.REACT_APP_BING_MAPS_API_KEY}
          options={{
            zoom: 4,
            mapTypeId: "canvasDark",
            navigationBarMode: "minified",
          }}
          pushPinLatLong={pushPinLatLong}
          classes={classes.map}
        />
      </div>
    </>
  );
}

export default App;
