const fs = require('fs')

// Add a note
const addNote = (title,body) => {
  const notes = loadNotes()
  //const duplicateNotes = notes.filter(function (note) {
    //return note.title === title
    //
    // Using arrow function in js.
    //const duplicateNotes = notes.filter((note) => note.title === title)
    //
    // This method used for 'n' number of notes in an js file.
    
    const duplicateNote = notes.find((note) => note.title === title)
   
    //if(duplicateNote.length === 0) {
   if(!duplicateNote) {
    notes.push({
    title: title,
    body: body
  })
  saveNotes(notes)
  console.log('New note added!')
    } else {
        console.log("Notes are already present!")
    }
}

// Remove note
const removeNote = (title) => {
const notes = loadNotes()
const notesToKeep = notes.filter((note) => note.title !== title)
if(notes.length > notesToKeep.length) {
    console.log('Notes Removed!')
    saveNotes(notesToKeep)
    } else {
    console.log('No note found!')
}
}

// List notes
const listNotes = () => {
    const notes = loadNotes()

    console.log('My notes')

    notes.forEach((note) => {
        console.log(note.title)
    })
}

// Read notes
const readNotes = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(note.title)
        console.log(note.body)
    } else {
        console.log('No notes found!')
    }
 
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}
const loadNotes = () => {
   try{ 
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    } catch (e) {
    return []
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}