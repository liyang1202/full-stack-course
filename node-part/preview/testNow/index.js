const path = require('path')
module.exports = class testNow {
  getTestSource(methodName, classFile, isClass) {
    return `
test('${'Test ' + methodName}',()=>{
const ${isClass ? '{' + methodName + '}' : methodName} = require('${
      '../' + classFile
    }')
const ret =  ${methodName}()
expect(ret)
.toBe('test return')
)
  `
  }

  getTestFileName(fileName) {
    const dirname = path.dirname(fileName)
    const baseName = path.basename(fileName)
    const extName = path.extname(fileName)
    const name = baseName.replace(extName, `.spec${extName}`)
    return path.format({
      dir: dirname + '/__test__',
      base: name,
    })
  }
}
