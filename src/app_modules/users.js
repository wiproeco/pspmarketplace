"use strict";
var DocumentDBClient = require("documentdb").DocumentClient;
var config_1 = require('../config');
var dbHelperQuery_1 = require('./dbHelperQuery');
var users = (function () {
    function users() {
        this.configObj = new config_1.default();
        this.docDbClient = new DocumentDBClient(this.configObj.host, {
            masterKey: this.configObj.authKey
        });
        this.dbHelperQueryObj = new dbHelperQuery_1.default(this.docDbClient, this.configObj.databaseId, this.configObj.collectionId);
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
    users.prototype.test = function () {
        return { "company": "wipro" };
    };
    return users;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = users;
//# sourceMappingURL=users.js.map