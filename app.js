const mongoose = require("mongoose");
const express = require("express");
const users = require("./routes/api/users");
// const clothing = require("./routes/api/clothing");
// const outfit = require("./routes/api/outfit");
// const search = require("./routes/api/search");
// const like = require("./routes/api/like");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const app = express();
const db = require("./config/keys").mongoURI;

app.use(passport.initialize());
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongoose is connected!"))
  .catch((err) => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", users);
// app.use("/api/clothing", clothing);
// app.use("/api/outfit", outfit);
// app.use("/api/search", search);
// app.use("/api/like", like);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
