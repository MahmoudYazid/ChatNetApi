"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.F_FindUserByName = exports.F_Getchatmsgs = exports.F_allchatmsgs = exports.F_loginuser = exports.F_adduser = exports.F_delmsg = exports.F_sendmsg = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Config_1 = require("./Config");
const model_1 = require("./model");
const F_sendmsg = (senderrid_, recieverid_, msg_, res_) => {
    mongoose_1.default.connect(Config_1.connectionstring).then((first) => {
        const new_record = new model_1.MsgDbModel({
            msg: msg_,
            senderid: senderrid_,
            recieverid: recieverid_,
            data: Date.now(),
        });
        new_record.save();
        res_.sendStatus(200);
    });
};
exports.F_sendmsg = F_sendmsg;
const F_delmsg = (msgid_, res) => {
    mongoose_1.default.connect(Config_1.connectionstring).then((first) => {
        model_1.MsgDbModel.findByIdAndRemove(msgid_).then((first) => {
            res.sendStatus(200);
        });
    });
};
exports.F_delmsg = F_delmsg;
const F_adduser = (userdata, res_) => {
    mongoose_1.default.connect(Config_1.connectionstring).then(() => {
        const newuser = new model_1.userdbModel({
            username: userdata.username_,
            password: userdata.pass_,
            tel: userdata.phone_,
        });
        newuser.save();
        res_.sendStatus(200);
    });
};
exports.F_adduser = F_adduser;
const F_loginuser = (userdata, res_) => {
    mongoose_1.default.connect(Config_1.connectionstring).then(() => {
        model_1.userdbModel
            .find({
            $and: [
                { username: `${userdata.identify}` },
                { password: userdata.password_ },
            ],
        })
            .then((data) => {
            if (data.length > 0) {
                data.forEach((itr) => {
                    res_.send(itr._id);
                });
            }
            else {
                res_.send(404);
            }
        })
            .catch(() => {
            res_.send(404);
        });
    });
};
exports.F_loginuser = F_loginuser;
const F_allchatmsgs = (userid, res_) => {
    mongoose_1.default.connect(Config_1.connectionstring).then(() => {
        model_1.MsgDbModel.find({
            $or: [{ senderid: userid }, { recieverid: userid }],
        }).then((data) => {
            res_.json(data);
        });
    });
};
exports.F_allchatmsgs = F_allchatmsgs;
const F_Getchatmsgs = (recieverid, senderid, res_) => {
    mongoose_1.default.connect(Config_1.connectionstring).then(() => {
        model_1.MsgDbModel.find({
            $or: [
                { senderid: recieverid, recieverid: senderid },
                { senderid: senderid, recieverid: recieverid },
            ],
        }).then((data) => {
            res_.json(data);
        });
    });
};
exports.F_Getchatmsgs = F_Getchatmsgs;
const F_FindUserByName = (name_, res_) => {
    mongoose_1.default.connect(Config_1.connectionstring).then(() => {
        model_1.userdbModel.find({ username: name_ }).then((data) => {
            res_.send(data);
        });
    });
};
exports.F_FindUserByName = F_FindUserByName;
