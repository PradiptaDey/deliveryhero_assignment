const express = require('express');

const app = express();
global.app = app;
app.set('root', __dirname);

const bodyParser = require('body-parser');

// Set all the environment variables
require('dotenv').config({ path: `${__dirname}/config/.env` });

const port = parseInt(process.env.PORT) || 8080;
const ENV_CONTEXT = process.env.ENV_CONTEXT = 'Development';

const tj = require("@tmcw/togeojson");
const fs = require("fs");
const DOMParser = require("xmldom").DOMParser;

const kml = new DOMParser().parseFromString(fs.readFileSync("./resource/FullStackTest_DeliveryAreas.kml", "utf8"));
const converted = tj.kml(kml);
let polygonData = converted.features.filter(el => el.geometry.type === 'Polygon').map(el => {
  return {
    name: el.properties.name,
    coordinates: el.geometry.coordinates[0].map(co => {
      return {
        latitude: co[1],
        longitude: co[0]
      }
    })
  }
});

app.set('polygonData', polygonData);

require('./routes');

/**
 * Starts the express app server
 */
function startAppServer() {
  app.enable('trust proxy');

  app.listen(port);
  console.log('Listening on port ' + port);
  console.log('Environment Context: ' + ENV_CONTEXT);
}

startAppServer();
