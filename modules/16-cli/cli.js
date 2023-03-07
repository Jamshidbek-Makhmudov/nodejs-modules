//proccess.argv bizga 2ta narsa chiqarib beradi ikalasi ham papkamizga mazil path boladi desak ham boladi indan keyin
//yozilgan malumotlarni terminalda chiqarib beraveradi. biz. bu darsa shu terminalda yozganlarimizni
//alohida bitta objectga yigishni organamiz
const logger = () => {
  const res = {}
  //.split= // [country,egypt]
  for (let i = 2; i < process.argv.length; i++) {
    const arg = process.argv[i].split("=")
    console.log(arg) //javob: ["student", "jamshid"]
    res[arg[0]] = arg[1] ? arg[1] : true //javob {student:"jamshid"}
  }
  return res
}
console.log(logger())
