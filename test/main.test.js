const compile = require('../index.js')
const { join } = require('path')
const fs = require('fs')

describe('compile', () => {
  const filePath = join(__dirname, 'template.ct')
  const expectedFilePath = join(__dirname, 'expected.ct')
  it('should compile', () => {
    const result = compile(filePath, { name: 'compiled', book: "book", books: "books" }).trim()
    const receivedString = fs.readFileSync(expectedFilePath, 'utf8').trim()

    expect(result).toMatch(receivedString)
  })
})


