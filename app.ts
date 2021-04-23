import dotenv from "dotenv";
import Server from "./models/server";

//CONFIGURAR DOT.ENV
dotenv.config();

const server = new Server();

server.listen();
