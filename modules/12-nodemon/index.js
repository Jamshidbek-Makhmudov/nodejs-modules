//nodemon nega kerak? nodemonsiz biz serverni ishga tushirganimizdan keyin ozgartirish kiritsak,
//va har gal uozgartirish kiritganimizdan song update qilisak ham serverda ozgarish bolmaydi
// qachin node ni ochirib qayta yurgizdirsak kein ishlidi. nodemoni shuni bizni ornimizga qiladi auto tarizda
//lekin bu nodemon moduleidagi bu kodlar ishlamidi nodemonda sababi uni biz package.json nodemon ishlash joyini glavniydagi index.jsga berib qoydik
//nodemon ishlashi uchun npm run dev qilish kerak

const http = require("http")
const server = http.createServer((request, response) => {
  console.log(request.url)
  response.write("<h1>Hello world 5 </h1>")

  response.end("<h1>Hello world 5 </h1>")
})
server.listen(3001, () => {
  console.log("server has been started on port: 3000")
})
