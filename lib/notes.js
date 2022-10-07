const path = require("path");
const fs = require("fs");

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  notesArray.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return body;
}

function removeNote(id, notesArray) {
  const newNotesArray = notesArray.filter((note) => note.id !== id)[0];

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: newNotesArray }, null, 2)
  );
  return newNotesArray;
}

module.exports = { findById, removeNote, createNewNote };
