"use strict";
var express_1 = require('express');
var uploadModule_1 = require('../app_modules/uploadModule');
var search = express_1.Router();
search.get('/alldocs/:search', function (req, res, next) {
    var obj = new uploadModule_1.default();
    obj.searchDocuments(req.params.search)
        .then(function (result) {
        res.send(result);
    });
});
search.get('/alldocs', function (req, res, next) {
    var obj = new uploadModule_1.default();
    obj.getDocuments()
        .then(function (result) {
        res.send(result);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = search;
//# sourceMappingURL=search.js.map