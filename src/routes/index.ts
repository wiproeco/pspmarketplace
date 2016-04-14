import {Router} from 'express';
import * as fs from 'fs';
import * as frd from 'formidable';
import * as filestore from 'fs-extra';
import uploadModule from '../app_modules/uploadModule';

const index = Router();

/* GET users listing. */
index.get('/', function(req, res, next) {
  res.render("index");
});


index.post('/', function(req, res, next) {
 if (req.method.toLowerCase() == 'post') {       
     var uploadObj = { "title" : null, "description" : null, "url" : null};
        var fmr = new frd.IncomingForm();
        fmr.parse(req, function (err, fields, files) {
            res.writeHead(200, { 'content-type': 'text/plain' });
            uploadObj.title = fields.title;
            uploadObj.description = fields.description;
        });
 
        fmr.on('end', function (fields, files) {
            
            var tempPath = this.openedFiles[0].path;
             
            var fileName = this.openedFiles[0].name;
                    
            var newFileName = "//D-113077851/GopikrishnaShare/PSPMarketPlace/"+ fileName;
            
            uploadObj.url = newFileName;
             
            filestore.copy(tempPath, newFileName, function (err) {
                if (err) {
                    console.error(err);
                } else {                         
                    var obj = new uploadModule();
                    obj.insertDocument(uploadObj)
                    .then(function(result){
                        res.end(JSON.stringify(result));
                    });                                                                                                          
                }
            });
        });
 
        return false;
    }
});

export default index;