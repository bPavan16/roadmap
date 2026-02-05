import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/database.js';

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: "admin" | "user";
}

User.init(
  {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: { type: DataTypes.STRING, defaultValue: "user" },
  },
  { sequelize, modelName: "user" },
);
