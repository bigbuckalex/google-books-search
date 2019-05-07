const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const bodyParser = require("body-parser");

const books = require("./routes/api/books");

const port = process.env.PORT || 5000;

const app = express();

//Body parser middleware
// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Use routes
app.use("/api/books", books);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Connect to MongoDB
mongoose.connect("mongodb://localhost/google-books-search",{useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB connected!");
    })
    .catch(err => {
        console.log(err);
    }
);



app.listen(port, () => console.log(`Server connected on port ${port}!`));