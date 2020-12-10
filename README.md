# Geo Path Reducer

Geo Path Reducer is a JavaScript implementation of the Douglas-Peucker algorithm that works with geo coordinates. This algorithm allows simplifying a long geo path with a lot of noise and inaccurate coordinates.

## Installation

You can install Geo Path Reducer using npm:

```lua
npm install geo-path-reducer
```

## Usage

To use Geo Path Reducer, simply import the library and call the `reduceGeoPath` function. The function takes two arguments:

- `points`: An array of geo coordinates in the format `[lat, lon]`.
- `tolerance`: The tolerance value for simplification. A larger tolerance value will result in more simplification.

The function returns an array of simplified geo coordinates in the same format as the input.

```javascript
const geoPathReducer = require('geo-path-reducer');

const points = [[42.35243, -71.04826], [42.35207, -71.04826], [42.35191, -71.04817], [42.35178, -71.04802], [42.35175, -71.04799], [42.35172, -71.04787], [42.35173, -71.04764], [42.35177, -71.04736], [42.35184, -71.04715], [42.35189, -71.04707], [42.35198, -71.04697], [42.35212, -71.04691], [42.35238, -71.04691], [42.35267, -71.04696], [42.35289, -71.04702], [42.35306, -71.04709], [42.35315, -71.04713], [42.35318, -71.04715], [42.35326, -71.04721], [42.35336, -71.04729], [42.35354, -71.04748], [42.35361, -71.04755], [42.35373, -71.04767], [42.35386, -71.04776], [42.35415, -71.0479], [42.35437, -71.04799], [42.35457, -71.04811], [42.35478, -71.04825], [42.35499, -71.04839], [42.35519, -71.04853], [42.35538, -71.04868], [42.35556, -71.04885], [42.35574, -71.04903], [42.3559, -71.04922], [42.35605, -71.04944], [42.35617, -71.04965], [42.35628, -71.04988], [42.35636, -71.0501], [42.35643, -71.05033], [42.35647, -71.05053], [42.35648, -71.05077], [42.35647, -71.0509]];

const tolerance = 0.0001;

const simplifiedPoints = geoPathReducer.reduceGeoPath(points, tolerance);
