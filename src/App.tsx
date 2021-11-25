/*
 * @Author: 张君康
 * @Date: 2021-11-24 19:46:16
 * @LastEditors: 张君康
 * @LastEditTime: 2021-11-25 14:36:59
 * @Description: App
 */
import React, { useEffect, useState } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import { Point } from "./types/Point";
import GoogleMap from "./components/Map";
import Marker from "./components/Marker";
import draw5Start from "./utils/draw5Star";
import "./styles/App.less";

const App: React.FC<{}> = () => {
  const [marks, setMarks] = useState<Point[]>([]);

  const onClick = (e: google.maps.MapMouseEvent) => {
    setMarks([...draw5Start({ lat: e.latLng.lat(), lng: e.latLng.lng() }, 5000)]);
  };

  const onRightClick = () => {
    setMarks([])
  }
  // useEffect(() => {
  //   setMarks([...draw5Start({ lat: 30.38385, lng: 99.6849 }, 5000)]);
  // }, []);

  return (
    <div className="App">
      <Wrapper apiKey={"AIzaSyDFqH9DxWu2-lNyZEqXl8_rI2ZeXRPHsA8"}>
        <GoogleMap onClick={onClick} onRightClick={onRightClick}>
          {marks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </GoogleMap>
      </Wrapper>
    </div>
  );
};

export default App;
