import { Sequelize } from "sequelize";

const db = new Sequelize("db-crud", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
