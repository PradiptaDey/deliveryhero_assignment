/**
 * @namespace features.location
 */

const locationApi = require('./locationApi');

module.exports = function initializeRoutes(app) {
  locationApi.register(app);
};
