/*
 * @Author: 张君康
 * @Date: 2021-11-24 21:12:17
 * @LastEditors: 张君康
 * @LastEditTime: 2021-11-25 14:38:27
 * @Description: 地图组件
 */
import React, { useEffect } from "react";

interface MapProps extends google.maps.MapOptions {
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onRightClick?:(e: google.maps.MapMouseEvent) => void
}

const Map: React.FC<MapProps> = ({onClick,onRightClick,children}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: 30.38385, lng: 99.6849 },
          zoom: 6,
        })
      );
    }
  }, [ref, map]);

  React.useEffect(() => {
    if (map) {
      ["click","rightclick"].forEach(eventName => {
        google.maps.event.clearListeners(map, eventName)
      })

      if (onClick) {
        map.addListener("click", onClick);
      }

      if(onRightClick){
        map.addListener("rightclick",onRightClick)
      }
    }
  }, [map, onClick]);

  return (
    <>
      <div className="MapContainer" ref={ref}></div>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          // set the map prop on the child component
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
};

export default Map;
