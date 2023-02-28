import { Express, Router } from "express";

import { F_Getchatmsgs, F_allchatmsgs, F_sendmsg } from "../MongoConfig/dbcontext";

export const mymsgsRouter = Router();

mymsgsRouter.get("/msgs", (req, res) => {
    
    F_allchatmsgs(String(req.query.id),res);



});

mymsgsRouter.get("/priverchat", (req, res) => {
  
  F_Getchatmsgs(String(req.query.sid), String(req.query.rid), res);
});