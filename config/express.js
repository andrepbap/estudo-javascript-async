var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

app.use(cors());
app.use("/static", express.static('./public'));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    app.set("img-url", "http://" + req.get('host') + "/static/img/");
    next();
});

consign({cwd: 'app'})
        .then('routes')
        .into(app);

module.exports = app;
