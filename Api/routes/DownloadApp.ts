import express,{ Express, Router } from "express";

export const downloadAppRouter = Router();

downloadAppRouter.get("/Download", (req, res,next) => {


res.download(__dirname+"/download/app-release.apk");
});