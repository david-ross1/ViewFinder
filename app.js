const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const comments = require("./routes/api/comments");
const views = require("./routes/api/views");
const photos = require("./routes/api/photos");

const app = express();
const port = process.env.PORT || 5000;
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
// app.get("/", (req, res) => res.send("Hello World!!"));

app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/views",views);
app.use("/api/photos", photos);

app.use(passport.initialize());
require("./config/passport")(passport);


app.listen(port, () => console.log(`Server is running on port ${port}`));

