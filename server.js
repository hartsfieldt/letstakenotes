const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

const htmlRoutes = require("./routes/htmlRoutes")

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static(
    "public"
))

app.use("/", htmlRoutes)



// Routes
// app.post
// app.get - GET /api/notes - GET /notes
//GET *
//POST /api/notes

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
})