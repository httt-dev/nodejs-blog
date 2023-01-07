const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

//import { engine } from 'express-handlebars';

const app = express();
const port = 3000;

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

app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
