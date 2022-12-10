# Geo Path Reducer

This module provides an implementation of the Douglas-Peucker algorithm in JavaScript, which is a method for simplifying a curve represented by a series of points. This can be useful for reducing the complexity of map data or other types of spatial data.

## Installation

You can install Geo Path Reducer using npm:

```lua
npm install geo-path-reducer
```

## Usage

To use the algorithm in your JavaScript code, you can import the `geoPathReducer` function from the `geo-path-reducer` module and call it, passing in an array of points and an epsilon value. For example:

```javascript
import geoPathReducer from 'geo-path-reducer';

const points = [
  { lat: 37.7749, lng: -122.4194 },
  { lat: 37.7755, lng: -122.4182 },
  { lat: 37.7758, lng: -122.4177 },
  { lat: 37.7765, lng: -122.4165 },
  { lat: 37.7769, lng: -122.4159 },
];
const epsilon = 0.0001;
const simplifiedPoints = geoPathReducer(points, epsilon);
console.log(simplifiedPoints);
```

This will output an array of simplified points, with each point having `lat` and `lng` properties.

## API

### `geoPathReducer(points, epsilon)`

Simplifies a curve represented by an array of points using the Douglas-Peucker algorithm.

- `points`: An array of points, where each point is an object with `lat` and `lng` properties.
- `epsilon`: The maximum distance between the simplified curve and the original curve, in degrees.

Returns an array of simplified points, where each point is an object with `lat` and `lng` properties.

## Contributing

Contributions to this project are welcome! If you find a bug or would like to suggest an improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
