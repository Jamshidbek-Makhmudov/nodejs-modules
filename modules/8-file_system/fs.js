const fs = require("fs") //file system
const path = require("path") //path
//fyle system orqali biz papa, faly create qilamiz, update, change qilamiz, read qilamiz
// fs.mkdirSync //synxron
// fs.mkdir() //asynxron doim shuni ishlatish kerak; 3ta parametr qabul qiladi. 1-directora; 2-option 3-callback
//bu papaka create qiladi
//biz bu darsa file system bn path moduleni birlashtirb ammmal bajaramiz
//
// fs.mkdir(path.join(__dirname, "temlates"), (err) => {
//   if (err) throw new Error()
//   console.log("folder created successfuly")
// })
//
// fs.writeFile() // 3ta parametr qabul qiladi 1- array buffer, 2-optional, 3-callback
//bu wrtite fayl orqali biz tayyro ichilgan papkaga faly ochib ichiga text ham yozb qoydlik
//lekin write fayl papka create qilmaydi faqat fayl create qiladi
fs.writeFile(
  path.join(__dirname, "temlates", "schedule.txt"),
  "this note created by James",
  (err) => {
    if (err) throw new Error()
    console.log("txt was created")
    fs.appendFile(
      path.join(__dirname, "temlates", "schedule.txt"),
      "new file add",
      (err) => {
        if (err) throw new Error()
        console.log("added new file")
      }
    )
  }
)
//fs.appendFile() qochimcha falyni add qilish uchun ishlatilinadi
//read fileda buffer data kichroq rezmerga olib beradi
fs.readFile(
  path.join(__dirname, "temlates", "schedule.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw new Error()
    // console.log(Buffer.from(data).toString)    // bu Buffferni oqishni bitta yoli 2-yolini esa logga shunchaki data yozib
    // readFile parametr optioniga  "utf-8" kodirovkasni yozish
    console.log(data)
  }
)
