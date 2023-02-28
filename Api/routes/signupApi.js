"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupRoute = void 0;
const express_1 = require("express");
const dbcontext_1 = require("../MongoConfig/dbcontext");
exports.signupRoute = (0, express_1.Router)();
exports.signupRoute.post("/signup", (req, res) => {
    (0, dbcontext_1.F_adduser)({
        username_: String(req.query.name),
        pass_: String(req.query.pass),
        phone_: Number(req.query.tel),
    }, res);
});
