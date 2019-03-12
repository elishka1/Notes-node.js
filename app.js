const yargs = require('yargs')
const notes = require('./notes')






let command = process.argv[2]

if (command=="add") {
    console.log('adding a note')
    notes.addNote(yargs.argv.notes);
}

else if (command=="remove") {
    console.log('removing')
}

else if (command=="read") {
    console.log('reading')
}

else if (command=="list") {
    console.log("listing")
    notes.listNotes();
}
 
else {
    console.log("unknown comnmand")
}



