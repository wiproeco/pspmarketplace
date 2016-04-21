"use strict";
var express_1 = require('express');
var multer = require('multer');
var bodyParser = require('body-parser');
var upload = express_1.Router();
var multer = require('multer');
/*app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/** Serving from the same express Server
 /** No cors required
app.use(express.static('../client'));
app.use(bodyParser.json());
*/
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '//D-113077851/GopikrishnaShare/PSPMarketPlace');
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        cb(null, file.originalname + '_' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
    }
});
var uploader = multer({
    storage: storage
}).single('file');
/** API path that will upload the files */
upload.post('/', function (req, res) {
    uploader(req, res, function (err) {
        if (err) {
            res.json({ error_code: 1, err_desc: err });
            return;
        }
        res.json({ error_code: 0, err_desc: null });
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = upload;
//# sourceMappingURL=uploadtest.js.map