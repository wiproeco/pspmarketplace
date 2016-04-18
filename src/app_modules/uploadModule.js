"use strict";
var DocumentDBClient = require("documentdb").DocumentClient;
var config_1 = require('../config');
var dbHelperQuery_1 = require('./dbHelperQuery');
var es6_promise_1 = require('es6-promise');
var uploadModule = (function () {
    function uploadModule() {
        this.configObj = new config_1.default();
        this.docDbClient = new DocumentDBClient(this.configObj.host, {
            masterKey: this.configObj.authKey
        });
        this.dbHelperQueryObj = new dbHelperQuery_1.default(this.docDbClient, this.configObj.databaseId, this.configObj.collectionId);
    }
    uploadModule.prototype.insertDocument = function (docObject) {
        var self = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            self.dbHelperQueryObj.executeQuery(function (err, items) {
                if (err) {
                    reject(err);
                }
                else {
                    self.dbHelperQueryObj.addItem(docObject, function (items) {
                        resolve(items);
                    });
                }
            });
        });
    };
    uploadModule.prototype.getDocuments = function () {
        var self = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            self.dbHelperQueryObj.executeQuery(function (err, items) {
                if (err) {
                    reject(err);
                }
                else {
                    var query = {
                        query: 'SELECT c.title, c.description, c.url, c.date FROM c',
                        parameters: []
                    };
                    self.dbHelperQueryObj.find(query, function (err, items) {
                        resolve(items);
                    });
                }
            });
        });
    };
    uploadModule.prototype.searchDocuments = function (searchText) {
        var self = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            self.dbHelperQueryObj.executeQuery(function (err, items) {
                if (err) {
                    reject(err);
                }
                else {
                    var query = {
                        query: 'SELECT c.title, c.description, c.url, c.date from c where contains(c.title,"' + searchText + '")',
                        parameters: []
                    };
                    self.dbHelperQueryObj.find(query, function (err, items) {
                        resolve(items);
                    });
                }
            });
        });
    };
    uploadModule.prototype.insertDocument1 = function () {
        var self = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            self.dbHelperQueryObj.executeQuery(function (err, items) {
                if (err) {
                    reject(err);
                }
                else {
                    self.dbHelperQueryObj.addItem({ "aa": "aa" }, function (items) {
                        resolve(items);
                    });
                }
            });
        });
    };
    return uploadModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = uploadModule;
//# sourceMappingURL=uploadModule.js.map