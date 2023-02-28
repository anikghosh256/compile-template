const fs = require('fs')


/**
 * Read file and compile it with variables.
 * 
 * @param {string} filePath - Path to file.
 * @param {object} variables - Variables to compile.
 * @returns {string} Compiled content.
 */
function compile(filePath, variables = {}) {
    // Read the content of the file
    const content = fs.readFileSync(filePath, 'utf8')

    // Define the regular expression pattern for variables
    const pattern = /\$\{(\w+)\}/g
  
    // Replace all variables in the content with their corresponding values
    const replacedContent = content.replace(pattern, (match, variable) => {
      if (variables.hasOwnProperty(variable)) {
        return variables[variable]
      } else {
        return match
      }
    })
  
    return replacedContent
  }

module.exports = compile