// // var obj = {
//     // name:"Sharan"
// // };
// // var stringObj = JSON.stringify(obj);
// // console.log(typeof stringObj);
// // console.log(stringObj);

// var personString = '{"name": "Sharan","age": 12}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person)
const fs = require('fs');
var originalNote = {
    title:'Some title',
    body:'Some body',
};
var originalNoteString = JSON.stringify(originalNote);
var note = JSON.parse(originalNoteString);
fs.writeFileSync('notes.json', originalNoteString);

var noteString= fs.readFileSync('notes.json');
console.log();
console.log(note.title);
