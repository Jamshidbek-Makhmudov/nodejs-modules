//nodejsni yana 1ta plus tarafi modulniy struktura deyiladi;
// console.log("hello", __dirname) // faly qayerdaligini korib beradi
const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" })

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw new Error()
          res.end(content)
        }
      )
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw new Error()
          res.end(content)
        }
      )
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw new Error()
          res.end(content)
        }
      )
    } else if (req.url === "/api/admin") {
      res.writeHead(200, { "Content-Type": "text/json" })
      const admin = {
        name: "Jamshidbek ",
        surname: "Makhmudov",
        job: "full-stack developer",
      }
      res.end(JSON.stringify(admin))
    }
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
