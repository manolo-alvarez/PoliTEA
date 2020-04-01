let inputTestEvents = require(ee461l-team-project-master/loadEvents.js);
let assert = require('assert');

describe('Input Test', function() {
    describe('EventsTest', function() {
      it('should return false if there is any empty input field', function() {
        assert.false(inputTestEvents.EventsTest("","",""));
      });
      it('should return false if there is any empty input field', function() {
        assert.false(inputTestEvents.EventsTest("abcd","",""));
      });
      it('should return true as long as any inputs are entered for all fields', function() {
        assert.true(inputTestEvents.EventsTest("78705","Austin","Texas"));
      });
    });
  });