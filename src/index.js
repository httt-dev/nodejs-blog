const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

//import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

//add them middleware de xu ly cho req.body ( neu khong thi req.body se co tri la undefine)
//doi voi express version < 4.16 thi chua ho tro middlware nay , luc nay se can install them body-parser
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//static file
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

//template engine
// const hbs = create({
//   layoutsDir: `${__dirname}\\resources\\views\\layouts`,
//   extname: `handlebars`,
//   // defaultLayout: "layout",
//   partialsDir: `${__dirname}\\resources\\views\\partials`,
// });

// app.engine("hbs", hbs.engine);

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

app.get("/", (req, res) => res.render("home"));

app.get("/search", (req, res) => {
  //get param : req.query.xxx

  res.render("search");
});

app.post("/search", (req, res) => {
  //get data from FormData
  // req.body  ( can middlware de xu ly  luu data gui len tu client vao bien body)

  res.render("search");
});

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
