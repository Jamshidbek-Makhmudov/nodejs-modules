//event ishlatishda varuabke nomini katta harf bn yozish kerak, sabab class ochib shu eventsdan inhertance olish uchun

const Events = require("events")
class Logger extends Events {
  log(a, b) {
    this.emit("calculate", a + b)
  }
}
const logger = new Logger()
logger.on("calculate", (data) => {
  //on methodi ozi qaram bolgan class methodlarini kuzatib turadi; parametr
  //sifatida 1- nomini, 2-calback function oladi
  console.log(data)
})
logger.log(2, 5)
