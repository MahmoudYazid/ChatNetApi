"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mymsgsRouter = void 0;
const express_1 = require("express");
const dbcontext_1 = require("../MongoConfig/dbcontext");
exports.mymsgsRouter = (0, express_1.Router)();
exports.mymsgsRouter.get("/msgs", (req, res) => {
    (0, dbcontext_1.F_allchatmsgs)(String(req.query.id), res);
});
exports.mymsgsRouter.get("/priverchat", (req, res) => {
    (0, dbcontext_1.F_Getchatmsgs)(String(req.query.sid), String(req.query.rid), res);
});
