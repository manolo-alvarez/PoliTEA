var assert = require('assert')
  , dotenv = require('dotenv');

var OpenSecretsClient = require('../lib/open_secrets_client');

describe('API client', function () {
  describe('instantiation', function () {

    afterEach(function () {
      process.env.OPEN_SECRETS_API_KEY = undefined;
    });

    it('should throw an error when creating a new client without an api key', function () {
      assert.throws(function () {
        var client = new OpenSecretsClient();
      }, Error, /required*apiKey/i);
    });

    it('should set client api key when passed in via constructor', function () {
      var fakeApiKey = '123';
      var client = new OpenSecretsClient(fakeApiKey);
      assert.equal(client.apiKey, fakeApiKey);
    });

    // @todo xxx fixme need to get these .env tests working
    //it('should set client api key when given via environment variable', function () {
    //  var fakeApiKey = '123';
    //  before(function () {
    //    fs.writeSync('../.env', 'OPEN_SECRETS_API_KEY='+fakeApiKey);
    //  });
    //
    //  var client = new OpenSecretsClient();
    //  assert.equal(client.apiKey, fakeApiKey);
    //
    //  after(function () {
    //    fs.unlinkSync('../.env');
    //  });
    //});
    //
    //it('should give precedence to api key passed in via constructor', function () {
    //  before(function () {
    //    process.env.OPEN_SECRETS_API_KEY = '123';
    //  });
    //
    //  var fakeApiKey = '456';
    //  var client = new OpenSecretsClient(fakeApiKey);
    //  assert.equal(client.apiKey, fakeApiKey);
    //});

    it('should have a default output format of JSON', function () {
      var client = new OpenSecretsClient('fake');
      assert.equal(client.format, 'json');
    });

    it('should throw an error when an invalid ouput format is given', function () {
      assert.throws(function () {
        var client = new OpenSecretsClient('fake', 'invalidFormat');
      }, Error, /invalid*format/i);
    });

  });

  describe('URL creation', function () {
    it('creates a valid default URL', function () {
      var format = 'xml'
        , apiKey = 'fake'
        , client = new OpenSecretsClient(apiKey, format);
      assert.equal(client._makeUrl(), client.baseURL+'?output='+format+'&apikey='+apiKey);
    });

    it('extends default URL with desired parameters', function () {
      var format = 'xml'
        , apiKey = 'fake'
        , client = new OpenSecretsClient(apiKey, format);
      assert.equal(
        client._makeUrl({method: 'candContrib'}),
        client.baseURL+'?output='+format+'&apikey='+apiKey+'&method=candContrib'
      );
    });
  });

  describe('endpoint', function () {
    it('basic request should not fail', function (done) {
      var client = new OpenSecretsClient();
      client.makeRequest('getLegislators', {id: 'NY'}).on('complete', function (res) {
        assert.equal(res instanceof Error, false);
        done();
      });
    });
  });
});