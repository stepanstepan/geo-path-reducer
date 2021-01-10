import distance from "./distance";

export default function perpendicularDistance(point, start, end) {
  // Calculate the perpendicular distance from point to line defined by start and end
  const d1 = distance(point.latitude, point.longitude, start.latitude, start.longitude);
  const d2 = distance(point.latitude, point.longitude, end.latitude, end.longitude);
  const d3 = distance(start.latitude, start.longitude, end.latitude, end.longitude);
  const s = (d1 + d2 + d3) / 2;
  const area = Math.sqrt(s * (s - d1) * (s - d2) * (s - d3));
  return (area * 2) / d3;
}