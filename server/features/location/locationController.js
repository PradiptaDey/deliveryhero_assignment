const ApiController = require('../../base/apiController');
const LocationService = require('./locationService');

/**
 * Provides a controller for user API.
 * @extends base.ApiController
 * @memberof features.location
 */
class LocationController extends ApiController {
  /**
   * Initializes a new instance of `LocationController` class
   * @param {ApiContext} context
   */
  constructor(context) {
    super(context);

    this.request = context.request;

    this.locationService = new LocationService(context);
  }

  /**
   * Identify The Location
   */
  async identifyOutletLocation(latitude, longitude) {
    const outlet = await this.locationService.identifyOutletLocation(latitude, longitude);
    this.respondOk(outlet);
  }
}

module.exports = LocationController;