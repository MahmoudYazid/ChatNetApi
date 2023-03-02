import { Express, Router } from "express";

import { F_Getchatmsgs, F_sendmsg } from "../MongoConfig/dbcontext";

export const mymsgsRouter = Router();



mymsgsRouter.get("/priverchat", (req, res) => {
  
  F_Getchatmsgs(String(req.query.sid), String(req.query.rid), res);
});