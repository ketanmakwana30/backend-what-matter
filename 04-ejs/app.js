const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("./public"));

try {
  app.get("/", (req, res) => {
    res.render("index");
  });
  app.get("/about", (req, res) => {
    res.render("about", { name: "Kitchen", tag: "Buy Room in just", price: "49,999" });
  });

  app.get("/error", (req, res, next) => {
    res.render("error", { error: "Something Went Wrong!" });
  });

  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    res.status(500);
    res.render("error", { error: err.message });
  });
} catch (err) {
  console.log(err);
}

app.listen(3000, () => {
  console.log("server is running");
});
