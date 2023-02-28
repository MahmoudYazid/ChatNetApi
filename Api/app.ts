import express,{ Express } from "express"
import { LoginRouter } from "./routes/loginApi"
import { delRouter } from "./routes/deletemsgapi"
import { sendmsgRouter } from "./routes/sendmsgApi"
import { mymsgsRouter } from "./routes/AllmychatApi"
import { signupRoute } from "./routes/signupApi"
import { FinduserRouter } from "./routes/Finduser"
const server=express()

server.use(LoginRouter)
server.use(delRouter);
server.use(sendmsgRouter);
server.use(mymsgsRouter);
server.use(signupRoute);
server.use(FinduserRouter);
server.listen(process.env.PORT ||8000)