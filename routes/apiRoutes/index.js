const router = require("express").Router();
const noteRoutes = require("./noteRoutes");

// Tells router to use noteRoutes vs index.js
router.use(noteRoutes);

module.exports = router;
