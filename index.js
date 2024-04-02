const fs = require('fs')
const functions = require('./helpers/functions')

/**
 * Read file and compile it with variables.
 *
 * @param {string} filePath - Path to file (if you just want to compile a string, pass null).
 * @param {object} variables - Variables to compile.
 * @param {string} content - File content to compile (if you don't have a file URL).
 * @returns {string} Compiled content.
 */
function compile(filePath = null, variables = {}, fileContent = null) {
  let content = fileContent
  // Read the content of the file
  if (filePath) {
    content = fs.readFileSync(filePath, 'utf8')
  }

  // Regex pattern for variables. It can be ${name} or ${f(name)}
  const pattern = /\$\{(\w+|\w+\(\w+\))\}/g

  // Replace all variables in the content with their corresponding values
  const replacedContent = content.replace(pattern, (match, variable) => {
    // check if has a function in pattern
    const functionMatch = variable.match(/\w+\((\w+)\)/)
    if (functionMatch) {
      const functionName = variable.split('(')[0]
      const functionArg = functionMatch[1]
      const functionArgValue = variables[functionArg]

      if (functions.hasOwnProperty(functionName) && functionArgValue) {
        return functions[functionName](functionArgValue)
      } else if (functions.nonArgumentFunctions.hasOwnProperty(functionName)) {
        return functions[functionName]()
      }
    }

    if (variables.hasOwnProperty(variable)) {
      return variables[variable]
    }

    return match
  })

  return replacedContent
}

module.exports = compile
