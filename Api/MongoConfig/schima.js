"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userdbSchima = exports.msgDbSchima = void 0;
const mongoose_1 = require("mongoose");
(0, mongoose_1.set)("strictQuery", false);
exports.msgDbSchima = new mongoose_1.Schema({
    msg: String,
    senderid: String,
    recieverid: String,
    data: Date,
});
exports.userdbSchima = new mongoose_1.Schema({
    username: String,
    tel: Number,
    password: String
});
