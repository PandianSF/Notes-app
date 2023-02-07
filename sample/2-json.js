const fs = require('fs')

//const book = {
  //  title: 'Positive Thoughts',
    //author: 'Henry Jovi'
//}

//const bookJSON = JSON.stringify(book)
//fs.writeFileSync('2-json.json',bookJSON)

//
// Challenge: Work with JSONand the files system
//
// 1.Load and parse the JSON Data
// 2.Change the name and ge property using your info
// 3.Stringify he changed object nd overwrite he original data
// 4.Test your work by viewing a data in the JSON file

const dataBuffer = fs.readFileSync('2-json.json')
const dataJSON = dataBuffer.toString()
const value = JSON.parse(dataJSON)

value.name = 'Mani'
value.age = 25
const userJSON = JSON.stringify(value)
fs.writeFileSync('2-json.json',userJSON)