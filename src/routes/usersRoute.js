"use strict";
var express_1 = require('express');
var usersRoute = express_1.Router();
/* GET users listing. */
usersRoute.get('/getuser/:uid', function (req, res, next) {
    var usersData = new usersData();
    usersData.getUser(req.params.uid)
        .then(function (result) {
        res.send(result);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = usersRoute;
//# sourceMappingURL=usersRoute.js.map