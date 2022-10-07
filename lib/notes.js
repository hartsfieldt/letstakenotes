const path = require("path");
const fs = require("fs");
const { resourceLimits } = require("worker_threads");

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

function removeNote(id, notesArray) {
  const result = notesArray.filter((note) => note.id !== id)[0];
  return result;
}
module.exports = { findById };
