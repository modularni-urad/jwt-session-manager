const jwt = require('jsonwebtoken')

// EXAMPLE:
// node generate.js fsjlefjlsf '{"id":11,"groups":["inserters"]}' 2030

console.log('node generate.js <SECRET> <JSON profile data> <desired year of expiration')
console.log('current argv: ', process.argv)

const SECRET = process.argv[3]
const profile = JSON.parse(process.argv[4])
const exipiryYear = Number(process.argv[4])

const result = jwt.sign({
  exp: new Date(exipiryYear).getTime(),
  data: profile
}, SECRET)

console.log('token:')
console.log(result, '\n')