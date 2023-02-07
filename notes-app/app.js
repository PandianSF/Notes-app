
// Chalenge: Define and use function in a new file 
//
// 1.Create a new file called notes.js
// 2.Create getNotes function that returns "MyNotes..."
// 3.Export getNotes function
// 4.From app.js,load in and call the function printing message to console


const validator = require('validator')
const yargs = require('yargs')
const notes = require('./notes.js')

//
// Goal: Refactor all functions
//
// 1.If function is a method,use ES6 method definition syntax
// 2.Otherwise,use most concise arrow function possible
// 3.Test your work


 // Customize yargs veriosn
 yargs.version('1.1.0')

 //Create add commmand
 yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
            
        }
    },
    handler(argv) {
       notes.addNote(argv.title,argv.body)
    }
 })

 // Create remove command
 yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOptions: true,
            type: 'string'       
        }
    },
    handler(argv) {
       notes.removeNote(argv.title)
    }
 })


 //
 // Goal: wire up list command
 // 1.Create and export listNotes from notes.js
 //   - Print note title for each one
 // 2.Call listNotes from command editor
 // 3.Test your work

 // Create list command
 yargs.command({
    command: 'list',
    describe: 'Listing a notes',
    handler() {
       notes.listNotes()
    }
 })

 // Create read command
 yargs.command({
    command: 'read',
    describe: 'Reading a note',
    builder:{
        title:{
            describe: 'Note Title',
            demandOptions: true,
            type: 'string'
        }
    },
    handler(argv) {
       notes.readNotes(argv.title)
    }
 })

 yargs.parse()

//console.log(yargs.argv)

