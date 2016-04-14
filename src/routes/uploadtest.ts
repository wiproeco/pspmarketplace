import {Router} from 'express';
//import uploadModule from './app_modules/uploadModule';
import * as fs from 'fs';
import * as frd from 'formidable';
import * as filestore from 'fs-extra';

const upload = Router();

upload.get('/', function(req, res, next) {
  res.render("upload");
});

/* GET users listing. */
upload.post('/uploading', function(req, res, next) {
 if (req.method.toLowerCase() == 'post') {
 
        //5.
 
        var fmr = new frd.IncomingForm();
        fmr.parse(req, function (err, fields, files) {
            res.writeHead(200, { 'content-type': 'text/plain' });
 
        });
 
        fmr.on('end', function (fields, files) {
            //6.
            var tempPath = this.openedFiles[0].path;
 
            //7.
            var fileName = this.openedFiles[0].name;
 
            //8.       
            var newFileName = "//D-113077851/GopikrishnaShare/PSPMarketPlace/"+ fileName; //../FileUpload_" + fileName;
 
            //9.
            filestore.copy(tempPath, newFileName, function (err) {
                if (err) {
                    console.error(err);
                } else {                                        
                    res.end();                                       
                }
            });
        });
 
        return false;
    }
});




export default upload;