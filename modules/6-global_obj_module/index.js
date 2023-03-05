//javascriptda faylllarni modullarga bolib ularnikeyi 1ta modulga toplamoqchi bolsak webpacklarni ornatish zarur edi
//lekin nodejs da bu ishni qilib beradigan ozini buyruqlari bor
//masalan boshqa joyda module.exports qilamiz toplayotgan joyimizda
//require('./') qilamiz
const userData = require("./user")
const carData = require("./car")

console.log(userData.user)
