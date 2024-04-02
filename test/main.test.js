const compile = require('../index.js')
const { join } = require('path')
const fs = require('fs')

describe('compile', () => {
  const filePath = join(__dirname, 'template.ct')
  const expectedFilePath = join(__dirname, 'expected.ct')
  it('should compile', () => {
    const result = compile(filePath, {
      name: 'compiled',
      book: 'book',
      books: 'books'
    }).trim()
    const receivedString = fs.readFileSync(expectedFilePath, 'utf8').trim()

    expect(result).toMatch(receivedString)
  })
})

describe('compile', () => {
  const filePath = join(__dirname, 'time-template.ct')

  it('should return time', () => {
    const result = compile(filePath, {}).trim()

    // check if the result is a number string
    expect(parseInt(result)).not.toBeNaN()
  })
})
