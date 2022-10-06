const path = require("path");
const router = require("express").Router();

// Route to serve notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// Serves the index
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// Wildcard for any other endpoint
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

module.exports = router;
