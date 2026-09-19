const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about", { name: "Kitchen", tag: "Buy Room in just", price: "49,999" });
});

app.listen(3000, () => {
  console.log("server is running");
});
