import { Schema,model,set } from "mongoose";
set("strictQuery", false);
export const msgDbSchima = new Schema({
  msg: String,
  senderid: String,
  recieverid: String,
  data: Date,
});

export const userdbSchima=new Schema({
    username:String,
    tel:Number,
    password:String
    
})


export const CNVSchima = new Schema({
  userOneid: String,
  usertwoid: String,
  UserOneName: String,
  UserTwoName: String,
});


// GetUserNameById;