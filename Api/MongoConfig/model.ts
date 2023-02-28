import mongoose, { model } from "mongoose";
import { msgDbSchima,userdbSchima } from "./schima";



export const MsgDbModel=model('msgdb',msgDbSchima,'msgdb')
export const userdbModel = model("userdb", userdbSchima,"userdb");

