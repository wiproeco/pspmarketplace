import {Router} from 'express';
import * as fs from 'fs';
import * as frd from 'formidable';
import * as filestore from 'fs-extra';
import uploadModule from '../app_modules/uploadModule';

const search = Router();

search.get('/alldocs/:search', function(req, res, next) {
    
 var obj = new uploadModule();
    obj.searchDocuments(req.params.search)
    .then(function(result){        
        res.send(result);
    });    
  
});

search.get('/alldocs', function(req, res, next){
    var obj = new uploadModule();
    obj.getDocuments()
    .then(function(result){
        res.send(result);
    }); 
});


export default search;