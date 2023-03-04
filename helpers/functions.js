/**
 * String helpers
 */

// uppercase
exports.uppercase = function (str) {
  return str.toUpperCase()
}

// lowercase
exports.lowercase = function (str) {
  return str.toLowerCase()
}

// capitalize
exports.capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}