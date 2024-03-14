const { Client } = require('@googlemaps/google-maps-services-js');

const client = new Client({});

const lat1 = 23.026683428051765; // Latitude of the first point
const lon1 = 72.52402862602018; // Longitude of the first point

const lat2 = 22.957206933002563; // Latitude of the second point
const lon2 = 72.5583875683431; // Longitude of the second point

const apiKey = 'AIzaSyC_mmyHAnkTF9dUjcTngzxG9eHfS3oMbfM';

client
  .distancematrix({
    params: {
      origins: [{ lat: lat1, lng: lon1 }],
      destinations: [{ lat: lat2, lng: lon2 }],
      mode: 'driving',
      units: 'metric',
      key: apiKey,
    },
  })
  .then((response) => {
    const distance = response.data.rows[0].elements[0].distance.text;
    console.log(`Distance between the two points: ${distance}`);
  })
  .catch((error) => {
    console.error(error.message);
  });
