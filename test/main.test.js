const compile = require('../index.js')
const { join } = require('path')

describe('compile', () => {
  const filePath = join(__dirname, 'template.ct')
  it('should compile', () => {
    const result = compile(filePath, { name: 'compiled' })
    expect(result).toBe('Hello compiled.')
  })
})


