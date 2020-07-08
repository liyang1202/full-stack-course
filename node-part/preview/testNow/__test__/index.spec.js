const fs = require('fs')
test('集成测试--测试生成代码文件', () => {
  //删除测试文件夹
})

test('测试测试代码生成', () => {
  const src = new (require('../index.js'))()
  const ret = src.getTestSource('fun', 'class')
  expect(ret).toBe(`
test('Test fun',()=>{
const fun = require('../class')
const ret =  fun()
expect(ret)
.toBe('test return')
)
  `)
})

test('测试文件名', () => {
  const src = new (require('../index.js'))()
  const ret = src.getTestFileName('/abc/index.js')
  expect(ret).toBe('/abc/__test__/index.spec.js')
})
