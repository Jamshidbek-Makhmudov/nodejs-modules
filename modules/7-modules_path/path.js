const path = require("node:path")
// console.log(path.basename(__filename)) //basename parametrda __filename bersak biz qaysi fayl ustida ishlayotganimizni korsatib beradi
// console.log(path.dirname(__filename)) // shu faylimizga bolgan barcha yollarni chiqarib beradi
// console.log(path.extname(__filename)) // falimizni kengaytmasini ya'ni js mi html mi shunu korsatib beradi
// console.log(path.parse(__filename)) //filedagi barcha ma'lumotlarni bita objectga yigib beradi
// {
//   root: '/',     //manzil ya'ni turgan joyi
//   dir: '/Users/jamshidekmakhmudov/Library/CloudStorage/OneDrive-Personal/becoder/backend/nodejs/first_module/7-modules/module_path',      //directoria
//   base: 'path.js',  //qaysi fayl
//   ext: '.js',     //kengaytmasi
//   name: 'path'     //nomi
// }
// console.log(path.join(__dirname, "templates", "index.html")) //__dir name. bu yerda modulegacha yol, 2-parametr bu papka, uchinchisi bu fayl nomi
//join bizga ochgan narsalarimizni qoshib beradi
// console.log(path.resolve(__dirname, "templates", "index.html")) //join bn resolveni vazifa deyarli bir xil ba'zi joylarda farq qiladi
