"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinduserRouter = void 0;
const express_1 = require("express");
const dbcontext_1 = require("../MongoConfig/dbcontext");
exports.FinduserRouter = (0, express_1.Router)();
exports.FinduserRouter.get("/finduser", (req, res) => {
    (0, dbcontext_1.F_FindUserByName)(String(req.query.name), res);
});
