import {Router} from 'express';
import * as fs from 'fs';
import uploadModule from '../app_modules/uploadModule';
import * as multer from 'multer';

const index = Router();

var uploadObj = { "title" : null, "description" : null, "url" : null};
var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, '//D-113077851/Uploads');            
    },
    filename: function (req, file, cb) {
        var datetimestamp = Date.now();
        var fileName = file.originalname + '_' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
        uploadObj.url = "http://d-113077851.fareast.corp.microsoft.com/uploads/" + fileName;
        cb(null, fileName);
    }
});

var uploader = multer({ //multer settings
                storage: storage
            }).single('file');

/* GET users listing. */
index.get('/', function(req, res, next) {
    res.render("index");    
});

index.post('/', function(req, res, next) {    
    uploader(req,res,function(err){
        uploadObj.title = res.req.body.textdata.title;
        uploadObj.description = res.req.body.textdata.description;
        var obj = new uploadModule();
        obj.insertDocument(uploadObj)
        .then(function(result){
            res.end(JSON.stringify(result));
        }); 
        if(err){
                res.json({error_code:1,err_desc:err});
                return;
        }
        res.json({error_code:0,err_desc:null});        
    });
});

export default index;