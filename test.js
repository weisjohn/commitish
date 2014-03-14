
var assert = require('assert')
  , commitish = require('./index')
  ;

for (var i = 0; i < 1e2; i++) {
    assert.equal(commitish().length, 6, "commitish generated a wrong length string");
}