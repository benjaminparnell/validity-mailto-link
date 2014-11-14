var isMailto = require('../')
  , assert = require('assert')

describe('Mailto validation', function () {

  it('should correctly validate valid mailto links', function () {
    [
      'mailto:me@benparnell.com'
    , 'mailto:benjaminparnell.94@gmail.com'
    , 'mailto:test-test@benparnell.com'
    , 'mailto:test+test@benparnell.com'
    ].forEach(function (value) {
      assert.equal(isMailto(value), true)
    })
  })

  it('should correctly return false for invalid email addresses', function () {
    [
      'me@benparnell.com'
    , 'http://google.com'
    , 'mailto:http://google.com'
    , 1
    , '1'
    ].forEach(function (value) {
      assert.equal(isMailto(value), false)
    })
  })

})
