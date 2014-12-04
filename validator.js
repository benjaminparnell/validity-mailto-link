module.exports = createValidator

function createValidator() {

  return function (key, msg, object, callback) {
    if (!mailToMatch(object[key])) {
      return callback(null, msg + ' must be a valid mailto link')
    }

    return callback(null, undefined)
  }

}

/**
* Validates that value is a mailto link
*
* @param {String} value link to validate
* @return {Boolean} True if value is a valid mailto link
*/
function mailToMatch (value) {
  /* jshint maxlen: false */
  return (/^mailto:(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))([?]([a-zA-Z0-9]+=[a-zA-Z0-9@.\s]+&?)+)?$/).test(value)
}
