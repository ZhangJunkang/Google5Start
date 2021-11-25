/*
 * @Author: 张君康
 * @Date: 2021-11-25 10:43:22
 * @LastEditors: 张君康
 * @LastEditTime: 2021-11-25 15:13:21
 * @Description: 画五角星
 */
import { Point } from "../types/Point";
/**
 * @description:
 * @param {Point} 中心点
 * @param {number} 点数量
 * @return {*}
 */
const draw5Start = (startCenter: Point, pointCount: number): Array<Point> => {
  const linePoints: number = pointCount / 5;
  const radius: number = 6;
  const points: Array<Point> = [];
  const dx: number = startCenter.lat - radius * Math.sin(Math.PI / 5);
  const dy: number = startCenter.lng - radius * Math.cos(Math.PI / 5);
  // const startX: number = radius * Math.sin(Math.PI / 5) + dx;
  // const startY: number = radius * Math.cos(Math.PI / 5) + dy;
  const dig: number = (Math.PI / 5) * 4;
  //points.push({ lat: startX, lng: startY });
  let currPoint: Point = { lat: startCenter.lat, lng: startCenter.lng };
  for (let i = 1; i < 6; i++) {
    const x: number = radius * Math.sin(i * dig + Math.PI / 5);
    const y: number = radius * Math.cos(i * dig + Math.PI / 5);
    const nextPoint: Point = { lat: dx + x, lng: dy + y };
    const stepX: number = (nextPoint.lat - currPoint.lat) / linePoints;
    const StepY: number = (nextPoint.lng - currPoint.lng) / linePoints;

    for (let j = 0; j < linePoints; j++) {
      points.push({
        lat: currPoint.lat + stepX * j,
        lng: currPoint.lng + StepY * j,
      });
    }

    currPoint = nextPoint;
  }

  return points;
};

export default draw5Start;
