"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CNVdbModel = exports.userdbModel = exports.MsgDbModel = void 0;
const mongoose_1 = require("mongoose");
const schima_1 = require("./schima");
exports.MsgDbModel = (0, mongoose_1.model)('msgdb', schima_1.msgDbSchima, 'msgdb');
exports.userdbModel = (0, mongoose_1.model)("userdb", schima_1.userdbSchima, "userdb");
exports.CNVdbModel = (0, mongoose_1.model)("CNV", schima_1.CNVSchima, "CNV");
