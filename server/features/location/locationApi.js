const LocationController = require('./locationController');
const ApiSchema = require('../../base/apiSchema');

/**
 *
 * @kind endpoint
 * @memberof features.location
 */
const identifyOutletLocation = {
    path: '/identifyOutletLocation',
    verb: 'get',
    handler: {
        controller: LocationController,
        method: 'identifyOutletLocation',
        arguments: ['?latitude', '?longitude']
    }
};

/**
 * Defines the Location API.
 * @kind schema
 * @type {ApiSchema}
 * @memberof features.location
 */
const LocationApi = {
  name: 'Location',
  url: '/api/location',
  endpoints: [
    identifyOutletLocation
  ]
};

module.exports = new ApiSchema(LocationApi);
