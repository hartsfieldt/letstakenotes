const express = require("express");
const app = express();
// Use required port or 3001
const PORT = process.env.PORT || 3001;

// Routes
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

// Middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Listening Port
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
