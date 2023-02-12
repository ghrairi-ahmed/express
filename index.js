import express from "express";
import router from "./router/router.js";
export const app = express()
const port = 3000
app.set("view engine", "ejs" )
app.use("/", router)
app.listen(port)