import {Router} from 'express';
//import uploadModule from './app_modules/uploadModule';
import * as fs from 'fs';
import * as multer from 'multer';
import * as filestore from 'fs-extra';
var bodyParser = require('body-parser');

const upload = Router();

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

    var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, '//D-113077851/GopikrishnaShare/PSPMarketPlace');            
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.originalname + '_' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1]);
        }
    });

    var uploader = multer({ //multer settings
                    storage: storage
                }).single('file');

    /** API path that will upload the files */
    upload.post('/', function(req, res) {
        uploader(req,res,function(err){
            if(err){
                 res.json({error_code:1,err_desc:err});
                 return;
            }
             res.json({error_code:0,err_desc:null});
        });
    });

export default upload;