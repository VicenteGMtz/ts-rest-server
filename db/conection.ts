import { Sequelize } from "sequelize";

const db = new Sequelize("restserver", "root", "rootroot", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default db;
