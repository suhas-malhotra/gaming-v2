const connectDB = require("./db");
//connect mongoDB database to the backend server
connectDB();

const express = require("express");



const path = require("path");

const ejsMate = require("ejs-mate");

const Team4 = require("./model/team4");

const app = express();


//for reading public folder for html css and js
app.use(express.static("public"));

//for parsing the body
app.use(express.urlencoded({ extended: true }));

//for running ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//to start ejs mate
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
  res.render("Home");
});

app.get("/valorant", (req, res) => {
  res.render("games/Valorant");
});

app.get("/call-of-duty", (req, res) => {
  res.render("games/Call-Of-Duty");
});

app.get("/battlegrounds", (req, res) => {
  res.render("games/Battlegrounds");
});

app.get("/zieus/more-info", (req, res) => {
  res.render("games/BattlegroundsZieusInfo");
});

app.get("/zieus/registration", (req, res) => {
  res.render("Registration4");
});

app.get("/thank-you", (req, res) => {
  res.render("Thank-You");
});

app.post("/zieus/registration", async (req, res) => {
  const team4 = new Team4(req.body.team4);
  await team4.save();
  res.redirect("/thank-you");
});

// const port = process.env.PORT || 80;
// app.listen(port, () => {
//   console.log(`Server started at port ${port}`);
// });

module.exports = app;
