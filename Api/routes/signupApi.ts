import { Express, Router } from "express";
import { F_adduser } from "../MongoConfig/dbcontext";

export const signupRoute = Router();
signupRoute.post("/signup", (req, res) => {

  F_adduser(
    {
      username_: String(req.query.name),
      pass_: String(req.query.pass),
      phone_: Number(req.query.tel),
    },
    res
  );


  
});
