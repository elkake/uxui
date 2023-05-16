// import dotenv from "dotenv";
import server from "./server/server";
import mongoose from "mongoose";

// dotenv.config();
mongoose.set('strictQuery', true);
const Server = new server();

Server.listen();
