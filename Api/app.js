"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginApi_1 = require("./routes/loginApi");
const deletemsgapi_1 = require("./routes/deletemsgapi");
const sendmsgApi_1 = require("./routes/sendmsgApi");
const AllmychatApi_1 = require("./routes/AllmychatApi");
const signupApi_1 = require("./routes/signupApi");
const Finduser_1 = require("./routes/Finduser");
const DownloadApp_1 = require("./routes/DownloadApp");
const core = require('cors');
const server = (0, express_1.default)();
server.use(core({
    origin: "*",
}));
server.use(loginApi_1.LoginRouter);
server.use(deletemsgapi_1.delRouter);
server.use(sendmsgApi_1.sendmsgRouter);
server.use(AllmychatApi_1.mymsgsRouter);
server.use(signupApi_1.signupRoute);
server.use(Finduser_1.FinduserRouter);
server.use(DownloadApp_1.downloadAppRouter);
server.listen(process.env.PORT || 3000);
