"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadAppRouter = void 0;
const express_1 = require("express");
exports.downloadAppRouter = (0, express_1.Router)();
exports.downloadAppRouter.get("/Download", (req, res, next) => {
    res.download(__dirname + "/download/app-release.apk");
});
