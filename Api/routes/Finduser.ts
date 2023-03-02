import { Express, Router } from "express";

import {
    F_FindUserByName,
  
  F_sendmsg,
} from "../MongoConfig/dbcontext";

export const FinduserRouter = Router();

FinduserRouter.get("/finduser", (req, res) => {
  F_FindUserByName(String(req.query.name), res);
});

