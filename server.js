var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var http = require('http');
var url = require('url');
var bodyParser = require('body-parser');
var extensions = require('./extensions.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//========= Serve =========///
app.get('/', function(req, res) {
    // Serve index.html
    res.send('A list of Magento extensions created by Mediastrategi. Endpoint: http://extensions.lab.mediastrategi.se/api/extensions');
});

router.get('/', function(req, res) {
    res.json({ message: 'hooray! Welcome to our awesome api!!!' });
});

//========= Get Extensions Route =========///
router.route('/extensions')
    .get(function(req, res) {
        res.json(extensions.getExtensions());
    });

app.use('/api', router);
app.listen(5000);