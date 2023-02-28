"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delRouter = void 0;
const express_1 = require("express");
const dbcontext_1 = require("../MongoConfig/dbcontext");
exports.delRouter = (0, express_1.Router)();
exports.delRouter.delete("/del/:id", (req, res) => {
    (0, dbcontext_1.F_delmsg)(req.params.id, res);
});
