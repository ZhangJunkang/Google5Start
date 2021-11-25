/*
 * @Author: 张君康
 * @Date: 2021-11-25 10:09:27
 * @LastEditors: 张君康
 * @LastEditTime: 2021-11-25 10:27:13
 * @Description: 标记组件
 */
import React from "react";
const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};
export default Marker;
