//nodejsni yana 1ta plus tarafi modulniy struktura deyiladi;
// console.log("hello", __dirname) // faly qayerdaligini korib beradi
const http = require("http")
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    //http request.method lari biz bilgan get,post... methodlaridir
    res.writeHead(200, { "Content-Type": "text/html" }) //wrtiteHead methodi bizga yuborayotgan datamizni nima ekanli
    //3ta parametr qabul qiladi, 1-number, 2-optionlan, 3-header object ichida
    res.end(`
    <h1 >send us email</h1>
    <form method="post" action="/">
    <input name="email type="email" placeholder="enter your email" />
    <button type="submit">send</button>
    </form>
    `)
  } else if (req.method === "POST") {
    const email = []
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }) //wrtiteHead methodi bizga yuborayotgan datamizni nima ekanli
    req.on("data", (data) => {
      email.push(Buffer.from(data))
    })
    req.on("end", () => {
      const message = email.toString().split("=")[1]

      res.end(`email was successfuly added: ${message}`)
    })
  }
})

server.listen(3000, () => {
  console.log("server has been started on port: 3000")
})
