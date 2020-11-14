const ApiService = require('../../base/apiService');
const geolib = require('geolib');

/**
 * Provides a service for location API.
 * @extends base.ApiService
 * @memberof features.location
 */
class LocationService extends ApiService {
  /**
   * Initializes a new instance of `LocationService` class
   * @param {ApiContext} context
   */
  constructor(context) {
    super(context);

    this.request = context.request;

    this.response = context.response;

  }

  /**
   * Gets outlet name
   */
  async identifyOutletLocation (latitude, longitude) {
    const polygonData = app.get('polygonData');
    const outletDetail = polygonData.find(el => {
      return geolib.isPointInPolygon({ latitude, longitude }, el.coordinates);
    });

    if (!outletDetail) {
      return 'Not found';
    }
    return outletDetail.name;
  }

}

module.exports = LocationService;
