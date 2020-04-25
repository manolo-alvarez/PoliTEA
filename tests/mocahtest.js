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


let UpdatePartiesTest = require(ee461l-team-project-master/updatePoliticians.js);
let assert = require('assert');

describe('Update Politicians Test', function() {
  describe('PartiesTest', function() {
    it('should return false if the input field is blank', function() {
      assert.false(updatePartiesTest.PartiesTest(""));
    });
    it('should return false if there is an input field that is not "D" or "R"', function() {
      assert.false(inputTestEvents.PartiesTest("abcd"));
    });
    it('should return true when either "D" or "R" are inputted', function() {
      assert.true(inputTestEvents.PartiesTest("D"));
    });
  });
});

let inputTestSenators = require(ee461l-team-project-master/senators.js);
let assert = require('assert');

describe('Input Test', function() {
    describe('SenatorsTest', function() {
      it('should return false if the input field is empty', function() {
        assert.false(inputTestSenators.SenatorsTest(""));
      });
      it('should return true as long as any input is entered', function() {
        assert.true(inputTestSenators.SenatorsTest("a"));
      });
    });
  });

let inputTestRepresentatives = require(ee461l-team-project-master/representatives.js);
let assert = require('assert');

describe('Input Test', function() {
    describe('RepresentativesTest', function() {
      it('should return false if the input field is empty', function() {
        assert.false(inputTestRepresentatives.RepresentativesTest(""));
      });
      it('should return true as long as any input is entered', function() {
        assert.true(inputTestRepresentatives.RepresentativesTest("2"));
      });
      it('should return true as long as any input is entered', function() {
        assert.true(inputTestRepresentatives.RepresentativesTest("a"));
      });
    });
  });

let populateTest = require(ee461l-team-project-master/populate.js);
let assert = require('assert');

describe('PopulateTest', function() {
  describe('StateTest', function() {
    it('should return full name for corresponding state', function() {
      assert.equal("Arkansas", states[3].full)
    });
    it('should return abbreviation for corresponding state', function() {
      assert.equal("WY",states[49].abbreviation);
    });
  });
});
