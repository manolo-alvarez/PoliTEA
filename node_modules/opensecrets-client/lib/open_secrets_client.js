var rest   = require('restler')
  , dotenv = require('dotenv')
  , extend = require('extend')
  , qs     = require('qs');

dotenv.load();

/**
 * Use restler service API to create a simple HTTP API wrapper.
 *
 * @see https://www.opensecrets.org/resources/create/api_doc.php
 *
 * @param {String} apiKey Your Opensecrets.org API key. Alternatively you can pass it in via a
 *                       OPEN_SECRETS_API_KEY environment variable (via exports, node cli option,
 *                       or by using a .env file in your project root).
 * @param {String} format One of either 'json', 'xml', or 'doc'
 */
var OpenSecretsClient = rest.service(function(apiKey, format) {
  this.apiKey = apiKey || process.env.OPEN_SECRETS_API_KEY;
  this.format = format ? format : 'json';

  if (! this.apiKey) {
    throw new Error('Required apiKey parameter is missing');
  }
  if (['json', 'xml'].indexOf(this.format) === -1) {
    throw new Error('Invalid output format given');
  }
}, {baseURL: 'https://www.opensecrets.org/api/'}, {

  /**
   * General purpose GET request factory.
   *
   * @param {String} method An Opensecrets.org API method name
   * @param {{}} parameters The GET request parameters
   * @returns {*}
   */
  makeRequest: function (method, parameters) {
    return this.get(this._makeUrl(extend(parameters, {method: method})))
  },

  /**
   * @param {{}} parameters The request parameters
   * @returns {string} The built URL
   * @private
   */
  _makeUrl: function (parameters) {
    return this.baseURL+'?'+qs.stringify(extend({output: this.format, apikey: this.apiKey}, parameters));
  }
});

module.exports = OpenSecretsClient;

