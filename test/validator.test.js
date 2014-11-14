var isMailto = require('../')()
  , assert = require('assert')

describe('Mailto validation', function () {

  it('should correctly validate valid mailto links', function () {
    [
      'mailto:me@benparnell.com'
    , 'mailto:benjaminparnell.94@gmail.com'
    , 'mailto:test-test@benparnell.com'
    , 'mailto:test+test@benparnell.com'
    ].forEach(function (value) {
      isMailto('link', 'link', { link: value }, function (error, valid) {
        assert.equal(valid, undefined)
      })
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
      isMailto('link', 'link', { link: value }, function (error, valid) {
        assert.notEqual(valid, undefined)
        assert.equal(valid, 'link must be a valid mailto link')
      })
    })
  })

})
