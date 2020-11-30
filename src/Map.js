import React, { useEffect, useRef } from "react";

export function GetMap(options, pushPinLatLong) {
  const { mapTypeId: mapIdString, navigationBarMode: navBarMode } = options;
  if (mapIdString) {
    const microsoftMapID = window.Microsoft.Maps.MapTypeId[mapIdString];
    options.mapTypeId = microsoftMapID;
  }
  if (navBarMode) {
    const msNavBarMode = window.Microsoft.Maps.NavigationBarMode[navBarMode];
    options.navigationBarMode = msNavBarMode;
  }

  let map = new window.Microsoft.Maps.Map("#bingMap", options);
  pushPinLatLong.forEach((item, index) => {
    const loc = new window.Microsoft.Maps.Location(...item);
    const pin = new window.Microsoft.Maps.Pushpin(loc, {
      title: "Global Security",
      subTitle: `Incident #${index}`,
      text: index,
      color: "red",
    });
    map.entities.push(pin);
  });
}

export default function BingMap({ options, apiKey, classes, pushPinLatLong }) {
  useEffect(() => {
    const onLoad = (options, pushPinLatLong) => {
      GetMap(options, pushPinLatLong);
    };
    if (!window.Microsoft) {
      const script = document.createElement(`script`);
      script.src = `http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=${apiKey}`;
      document.head.append(script);
      window.addEventListener(
        `load`,
        onLoad.bind(this, options, pushPinLatLong)
      );
      return () =>
        script.removeEventListener(
          `load`,
          onLoad.bind(this, options, pushPinLatLong)
        );
    } else onLoad();
  }, [options]);

  return <div id="bingMap" className={classes} />;
}

Map.defaultProps = {
  options: {
    center: { lat: 48, lng: 8 },
    zoom: 5,
  },
};
