import sequelize from "../config/db.js";
import User from "./user.model.js";
import Product from "./product.model.js";

await sequelize.sync({ alter: true });

export { sequelize, User, Product };
