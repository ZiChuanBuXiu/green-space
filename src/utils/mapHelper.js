let geolib = require('geolib');

let parkData = require('../data/park_data.json');

function inRange(start, destination, range) {
  switch (range) {
    case '1km':
      return geolib.getDistance({latitude: start[1], longitude: start[0]}, {
        latitude: destination[1],
        longitude: destination[0]
      }) < 1200;
    case '2km':
      return geolib.getDistance({latitude: start[1], longitude: start[0]}, {
        latitude: destination[1],
        longitude: destination[0]
      }) < 2200;
    case '3km':
      return geolib.getDistance({latitude: start[1], longitude: start[0]}, {
        latitude: destination[1],
        longitude: destination[0]
      }) < 3200;
    case '4km':
      return geolib.getDistance({latitude: start[1], longitude: start[0]}, {
        latitude: destination[1],
        longitude: destination[0]
      }) < 4500;
    default:
      return true
  }
}

export default function pickTop(activity, start, range) {
  let filteredData = filterParksByRange(start, range);
  if (activity === null) {
    return filteredData.sort((a, b) => {
      if (a['workout']['score'] + a['relax']['score'] + a['social']['score'] > b['workout']['score'] + b['relax']['score'] + b['social']['score']) {
        return -1;
      } else {
        return 1;
      }
    }).splice(0, 3);
  }
  return filteredData.sort((a, b) => {
    if (a[activity.toLowerCase()]['score'] > b[activity.toLowerCase()]['score']) {
      return -1;
    } else {
      return 1;
    }
  }).splice(0, 3);
}

function filterParksByRange(start, range) {
  let data = parkData.data;
  return data.filter((element) => {
    return inRange(start, element['coordinates'], range)
  });
}