import { Express, Router } from "express";
import { F_delmsg } from "../MongoConfig/dbcontext";

export const delRouter = Router();
delRouter.delete("/del/:id", (req, res) => {
    

    F_delmsg(req.params.id,res)


});
