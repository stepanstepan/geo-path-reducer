import perpendicularDistance from './perpendicular-distance';

export default function douglasPeucker(points, epsilon) {
  // Find the point with the maximum distance
  let dmax = 0;
  let index = 0;
  const n = points.length;
  for (let i = 1; i < n - 1; i++) {
    const d = perpendicularDistance(points[i], points[0], points[n - 1]);
    if (d > dmax) {
      index = i;
      dmax = d;
    }
  }

  // If max distance is greater than epsilon, recursively simplify
  if (dmax > epsilon) {
    const leftPoints = points.slice(0, index + 1);
    const rightPoints = points.slice(index);
    const simplifiedLeft = douglasPeucker(leftPoints, epsilon);
    const simplifiedRight = douglasPeucker(rightPoints, epsilon);
    return simplifiedLeft.slice(0, simplifiedLeft.length - 1).concat(simplifiedRight);
  } else {
    return [points[0], points[n - 1]];
  }
}