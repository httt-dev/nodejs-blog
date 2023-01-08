const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //app.get("/", (req, res) => res.render("home"));

    //app.get("/news", (req, res) => res.render("news"));

    //su dung newsRouter cho /news path
    app.use('/news', newsRouter);

    //   app.get("/search", (req, res) => {
    //     //get param : req.query.xxx

    //     res.render("search");
    //   });

    //   app.post("/search", (req, res) => {
    //     //get data from FormData
    //     // req.body  ( can middlware de xu ly  luu data gui len tu client vao bien body)

    //     res.render("search");
    //   });

    //su dung siteRouter cho / path
    app.use('/', siteRouter);
}

module.exports = route;
