import express,{ Express } from "express"
import { LoginRouter } from "./routes/loginApi"
import { delRouter } from "./routes/deletemsgapi"
import { sendmsgRouter } from "./routes/sendmsgApi"
import { mymsgsRouter } from "./routes/AllmychatApi"
import { signupRoute } from "./routes/signupApi"
import { FinduserRouter } from "./routes/Finduser"
import { downloadAppRouter } from "./routes/DownloadApp"
const core=require('cors')
const server=express()
server.use(
  core({
    origin: "*",
  })
);
server.use(LoginRouter)
server.use(delRouter);
server.use(sendmsgRouter);
server.use(mymsgsRouter);
server.use(signupRoute);
server.use(FinduserRouter);
server.use(downloadAppRouter);
server.listen(process.env.PORT ||3000)
