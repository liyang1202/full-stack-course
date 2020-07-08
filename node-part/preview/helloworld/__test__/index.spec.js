test('测试helloworld', () => {
  const ret = require('../index.js')
  expect(ret).toBe('hello world')
})
