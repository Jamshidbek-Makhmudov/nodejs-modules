//bu module bizga server yaratishga yordam beradi
const http = require("http")
const server = http.createServer((request, response) => {
  console.log(request.url)
  response.write("<h1>Hello </h1>")
  response.end()
})
server.listen(3000, () => {
  console.log("server has been started on port: 3000")
})
