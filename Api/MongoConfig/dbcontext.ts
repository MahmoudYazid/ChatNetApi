import mongoose from "mongoose";
import { connectionstring } from "./Config";
import { CNVdbModel, MsgDbModel, userdbModel } from "./model";




export const F_sendmsg = (
  senderrid_: String,
  recieverid_: String,
  msg_: String,
  res_: any
) => {
  mongoose.connect(connectionstring).then((first) => {
    

    CNVdbModel.find({
      $or: [
        { userOneid: senderrid_, usertwoid: recieverid_ },
        { userOneid: recieverid_, usertwoid: senderrid_ },
      ],
    }).then(findingdata=>{
      userdbModel.findById(senderrid_).then(useronedata=>{
        userdbModel.findById(recieverid_).then(usertwodata=>{
          if(findingdata.length==0){
        const newcnv = new CNVdbModel({
          userOneid: senderrid_,
          usertwoid: recieverid_,
          UserOneName: useronedata?.username,
          UserTwoName: usertwodata?.username,
        });
        newcnv.save();
        const new_record = new MsgDbModel({
          msg: msg_,
          senderid: senderrid_,
          recieverid: recieverid_,
          data: Date.now(),
        });

        new_record.save();
         res_.send(200);
      }else{
                const new_record = new MsgDbModel({
                  msg: msg_,
                  senderid: senderrid_,
                  recieverid: recieverid_,
                  data: Date.now(),
                });

                new_record.save();
                res_.send(200)
              }
            }
            )
          }
          )
        }
        )
      })}
 

    



export const F_delmsg = (msgid_: String, res: any) => {
  mongoose.connect(connectionstring).then((first) => {
    MsgDbModel.findByIdAndRemove(msgid_).then((first) => {
      res.sendStatus(200);
    });
  });
};

export const F_adduser = (userdata: any, res_: any) => {
  mongoose.connect(connectionstring).then(() => {
    const newuser = new userdbModel({
      username: userdata.username_,
      password: userdata.pass_,
      tel: userdata.phone_,
    });
    newuser.save();
    res_.sendStatus(200);
  });
};

export const F_loginuser = (userdata: any, res_: any) => {
  mongoose.connect(connectionstring).then(() => {
    userdbModel
      .find({
        $and: [
          { username: `${userdata.identify}` },
          { password: userdata.password_ },
        ],
      })
      .then((data) => {
        if (data.length>0){
                 data.forEach((x) =>
                   CNVdbModel.find({
                     $or: [{ userOneid: x._id }, { usertwoid: x._id }],
                   }).then((y) => {
                     res_.send(y);
                   })
                 );
          

        }
       
   
          
     

         
      
        
      })
      .catch(() => {
        res_.send(404);
      });
  });
};

export const F_Getchatmsgs = (
  recieverid: String,
  senderid: String,
  res_: any
) => {
  mongoose.connect(connectionstring).then(() => {
    MsgDbModel.find({
      $or: [
        { senderid: recieverid, recieverid: senderid },
        { senderid: senderid, recieverid: recieverid },
      ],
    }).then((data) => {
      res_.json(data);
    });
  });
};


export const F_FindUserByName = (name_:String,res_:any)=>{
   mongoose.connect(connectionstring).then(() => { 
    userdbModel.find({ username: name_ }).then((data) => {
      res_.send(data)
     
   }); }
    
   )


}