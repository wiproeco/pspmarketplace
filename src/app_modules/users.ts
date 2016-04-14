
var DocumentDBClient = require("documentdb").DocumentClient;
import config from '../config';
import dbHelperBase from './dbHelperBase';
import dbHelperQuery from './dbHelperQuery';
import {Promise} from 'es6-promise';

class users {

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
    
    /*getUser(uid:string){
        var self = this;
        return new Promise(function(resolve, reject){
            self.dbHelperQueryObj.executeQuery((err, items) => {
                if (err) {
                    reject(err);
                }
                else {
                    var query = {
                        query: 'SELECT * FROM root r where r.uid=@uid',
                        parameters: [
                            {
                                name: '@uid',
                                value: uid
                            }
                        ]
                    };

                    self.dbHelperQueryObj.find(query, (err, items) => {
                        if (err) {
                            reject(err);
                        }
                        else{
                            resolve(items);
                        }
                    });
                }
            });
        });
    }
    
    insertDocument(){
        var self = this;
        return new Promise(function(resolve, reject){
            self.dbHelperQueryObj.executeQuery((err, items) => {
                if (err) {
                    reject(err);
                }
                else {                    
                    self.dbHelperQueryObj.addItem({ "status" : "true" , "id" : 1 }, (items) => {
                        if (err) {
                            reject(err);
                        }
                        else{
                            resolve(items);
                        }
                    });
                }
            }); 
        });
    }*/
    test(){
        return {"company" : "wipro"}
    }

}

export default users;