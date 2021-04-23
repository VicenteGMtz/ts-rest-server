import { DataTypes } from "sequelize";
import db from "../db/conection";

const Usuario = db.define("Usuario", {
  nombre: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.BOOLEAN, //tinyint tambien puede ser booleano
  },
});

export default Usuario;
