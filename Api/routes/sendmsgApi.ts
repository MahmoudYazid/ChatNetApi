import { Express, Router } from "express";
import { MsgDbModel } from "../MongoConfig/model";
import { F_sendmsg } from "../MongoConfig/dbcontext";

export const sendmsgRouter=Router()

sendmsgRouter.post("/sendmsg",(req,res) => { 
    F_sendmsg(String(req.query.sid),String(req.query.rid),String(req.query.msg),res);
 })