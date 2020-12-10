import geolib from 'geolib';

export default function DouglasPeucker(source, epsilon) {
  let maxDistance = 0;
  let maxDistanceIndex = 0;
  let end = source.length - 1;
  let index = 1;

  while (index < end) {
    const distance = geolib.getDistanceFromLine(source[i], source[0], source[end]);

    if (distance > maxDistance) {
      maxDistanceIndex = index;
      maxDistance = distance;
    }

    index += 1;
  }
  
  if (maxDistance > epsilon) {
    const recResults1 = DouglasPeucker(source.slice(0, maxDistanceIndex), epsilon);
    const recResults2 = DouglasPeucker(source.slice(maxDistanceIndex, end + 1), epsilon);
    return [ ...recResults1, ...recResults2 ];
  } else {
    return [ source[0], source[end] ];
  }
};
