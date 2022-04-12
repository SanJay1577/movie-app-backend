import express from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import {MongoConnect} from "./db.js"
import { DashRouter } from "./routes/dashboard.js";
import { loginUser } from "./routes/login.js";
import { signupUser } from "./routes/signup.js";
import { LogoutRouter } from "./routes/logout.js";





//dotenv configuration
dotenv.config();

const app = express();
const PORT = process.env.PORT

//mongo connection 
MongoConnect();

//middleWare:
app.use(cors());
app.use(express.json());

//routes
app.use("/",DashRouter); 
app.use("/login",loginUser);
app.use("/signup",signupUser); 
app.use("/logout", LogoutRouter);

app.listen(PORT, ()=>console.log(`App lisenting to port localhost:${PORT}`)); 