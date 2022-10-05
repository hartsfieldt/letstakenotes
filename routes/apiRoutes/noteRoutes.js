const router = require("express").Router();
const { notes } = require("../../db/db.json");
const uuid = require("uuid");

router.get("/notes", (req, res) => {
  res.json(notes);
});

module.exports = router;
