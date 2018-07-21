console.log("Starting app");
//Other modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
//Modules by me
const notes = require('./notes.js');

const argv = yargs
  .help()
  .argv;
var command = process.argv[2];
// console.log(process.argv);
// console.log("Command:",command);
// console.log("Yargs cmd:", argv);
// console.log("Title:",argv.title);
if (command == "add") {
    var note = notes.addNote(argv.title,argv.body);
    if(note){
        console.log("Note created");
        notes.logNote(note)
    }else{
        console.log("Invalid title")
    }
}else if(command == "list"){
    var allNotes = notes.listNote();
    console.log(`Print ${allNotes.length} note(s)`);
    allNotes.forEach((note) => {
        notes.logNote(note)
    });
}else if(command == "remove"){
    notes.removeNote(argv.title);
    console.log(`Removed note '${argv.title}'`);
}else if(command == "read"){
    var note = notes.readNote(argv.title);
    if (note) {
        console.log("Note found");
        notes.logNote(note)
    }else{
        console.log("Error");
    }
}else{
    console.log("Command not recognized");
}
console.log("Finished app")
