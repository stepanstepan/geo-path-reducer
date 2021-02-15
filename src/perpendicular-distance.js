import distance from "./distance";

export default function perpendicularDistance(point, start, end) {
  // Calculate the perpendicular distance from point to line defined by start and end
  const d1 = distance(point.lat, point.lng, start.lat, start.lng);
  const d2 = distance(point.lat, point.lng, end.lat, end.lng);
  const d3 = distance(start.lat, start.lng, end.lat, end.lng);
  const s = (d1 + d2 + d3) / 2;
  const area = Math.sqrt(s * (s - d1) * (s - d2) * (s - d3));
  return (area * 2) / d3;
}