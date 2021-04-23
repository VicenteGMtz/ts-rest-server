import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import cors from "cors";
import db from "../db/conection";

class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";

    //METODOS INICIALES
    this.dbConection();
    this.middlewares(); //primero de agregan los middlewares
    this.routes();
  }

  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
  }

  async dbConection() {
    try {
      await db.authenticate();
      console.log("Datebase online");
    } catch (error) {
      throw new Error(error);
    }
  }

  //midlewares funciones que se ejecutan antes de otros procedimientos
  middlewares() {
    //CORS
    this.app.use(cors());

    //lectura del body
    this.app.use(express.json());

    //carpeta pública
    this.app.use(express.static("public"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo por el puerto !!! ` + this.port);
    });
  }
}

export default Server;
