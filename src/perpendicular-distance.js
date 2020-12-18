export default function perpendicularDistance(point, start, end) {
  // Calculate the perpendicular distance from point to line defined by start and end
  const x = point[0], y = point[1];
  const x1 = start[0], y1 = start[1];
  const x2 = end[0], y2 = end[1];
  const numerator = Math.abs((y2 - y1) * x - (x2 - x1) * y + x2 * y1 - y2 * x1);
  const denominator = Math.sqrt(Math.pow(y2 - y1, 2) + Math.pow(x2 - x1, 2));
  return numerator / denominator;
}