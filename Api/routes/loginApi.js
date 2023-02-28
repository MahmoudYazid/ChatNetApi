"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRouter = void 0;
const express_1 = require("express");
const dbcontext_1 = require("../MongoConfig/dbcontext");
exports.LoginRouter = (0, express_1.Router)();
exports.LoginRouter.get("/login", (req, res) => {
    (0, dbcontext_1.F_loginuser)({
        identify: req.query.identify,
        password_: req.query.psw,
    }, res);
});
