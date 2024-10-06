const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home", (req, res) => {
  res.sendFile("./views/home.html", {
    root: __dirname,
  });
});

app.get("/about-us", (req, res) => res.redirect("/about"));
app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", {
    root: __dirname,
  });
});

app.use((req, res) => {
  res.sendFile("./views/not-found.html", {
    root: __dirname,
  });
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
