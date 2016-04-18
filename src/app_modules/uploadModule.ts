
var DocumentDBClient = require("documentdb").DocumentClient;
import config from '../config';
import dbHelperBase from './dbHelperBase';
import dbHelperQuery from './dbHelperQuery';
import {Promise} from 'es6-promise';

class uploadModule {
    
    configObj;
    docDbClient;
    dbHelperQueryObj;
    
    constructor() {
         this.configObj = new config();
        this.docDbClient = new DocumentDBClient(this.configObj.host, {
            masterKey: this.configObj.authKey
        });
        this.dbHelperQueryObj = new dbHelperQuery(this.docDbClient, this.configObj.databaseId, this.configObj.collectionId);
    }
            
     insertDocument(docObject){
        var self = this;
        return new Promise(function(resolve, reject){
            self.dbHelperQueryObj.executeQuery((err, items) => {
                if (err) {
                    reject(err);
                }
                else {                    
                    self.dbHelperQueryObj.addItem(docObject, (items) => {                      
                         resolve(items);                       
                    });
                }
            }); 
        });
    }
    
    getDocuments(){
         var self = this;
        return new Promise(function(resolve, reject){
            self.dbHelperQueryObj.executeQuery((err, items) => {
                if (err) {
                    reject(err);
                }
                else {      
                    var query = {
                        query: 'SELECT c.title, c.description, c.url, c.date FROM c',
                        parameters: []
                    }              
                    self.dbHelperQueryObj.find(query, (err, items) => {                      
                         resolve(items);                       
                    });
                }
            }); 
        });
    } 
    
    searchDocuments(searchText){
       
        var self = this;
        return new Promise(function(resolve, reject){
            self.dbHelperQueryObj.executeQuery((err, items) => {
                if (err) {
                    reject(err);
                }
                else {      
                    var query = {                        
                        query: 'SELECT c.title, c.description, c.url, c.date from c where contains(c.title,"'+searchText+'")',
                        parameters: []
                    }              
                    self.dbHelperQueryObj.find(query, (err, items) => {                      
                         resolve(items);                       
                    });
                }
            }); 
        });
    } 
    
    
     insertDocument1(){
        var self = this;
        return new Promise(function(resolve, reject){
            self.dbHelperQueryObj.executeQuery((err, items) => {
                if (err) {
                    reject(err);
                }
                else {                    
                    self.dbHelperQueryObj.addItem({"aa":"aa"}, (items) => {                      
                         resolve(items);                       
                    });
                }
            }); 
        });
    }
    
    
}




export default uploadModule;

