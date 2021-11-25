/*
 * @Author: 张君康
 * @Date: 2021-11-25 11:02:09
 * @LastEditors: 张君康
 * @LastEditTime: 2021-11-25 13:34:36
 * @Description: 画线
 */
import React from "react";
import draw5Start from "../utils/draw5Star";

const Marker: React.FC<google.maps.PolylineOptions> = (options) => {
  const [polyline, setPolyline] = React.useState<google.maps.Polyline>();

  React.useEffect(() => {
    if (!polyline) {
      setPolyline(
        new google.maps.Polyline({
          path: draw5Start({ lat: 30.38385, lng: 99.6849 },5000),
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        })
      );
    }

    return () => {
      if (polyline) {
        polyline.setMap(null);
      }
    };
  }, [polyline]);

  React.useEffect(() => {
    if (polyline) {
      polyline.setOptions(options);
    }
  }, [polyline, options]);

  return null;
};
export default Marker;
