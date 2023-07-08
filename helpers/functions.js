const pluralize = require('pluralize')

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

//pluralize
exports.pluralize = function (str) {
  return pluralize.plural(str)
}

//capitalize + pluralize
exports.capPluralize = function (str) {
  str = exports.capitalize(str)
  return pluralize.plural(str)
}

//singularize
exports.singularize = function (str) {
  return pluralize.singular(str)
}

//capitalize + singularize
exports.capSingularize = function (str) {
  str = exports.capitalize(str)
  return pluralize.singular(str)
}