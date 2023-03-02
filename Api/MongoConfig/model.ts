import mongoose, { model } from "mongoose";
import { CNVSchima, msgDbSchima,userdbSchima } from "./schima";



export const MsgDbModel=model('msgdb',msgDbSchima,'msgdb')
export const userdbModel = model("userdb", userdbSchima,"userdb");

export const CNVdbModel = model("CNV", CNVSchima, "CNV");
