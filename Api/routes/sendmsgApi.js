"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendmsgRouter = void 0;
const express_1 = require("express");
const dbcontext_1 = require("../MongoConfig/dbcontext");
exports.sendmsgRouter = (0, express_1.Router)();
exports.sendmsgRouter.post("/sendmsg", (req, res) => {
    (0, dbcontext_1.F_sendmsg)(String(req.query.sid), String(req.query.rid), String(req.query.msg), res);
});
