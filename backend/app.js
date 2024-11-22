import express from "express"
import web_route from "./route/web.js";
const app=express();
app.use("/",web_route)
app.listen(3000);