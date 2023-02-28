import { Express,Router } from "express";
import mongoose from "mongoose";
import { connectionstring } from "../MongoConfig/Config";
import { MsgDbModel } from "../MongoConfig/model";
import { F_loginuser } from "../MongoConfig/dbcontext";

export const LoginRouter=Router();
LoginRouter.get("/login", (req, res) => {
    F_loginuser({
      identify: req.query.identify,
      password_: req.query.psw,
    },res);

     
    
   
});
