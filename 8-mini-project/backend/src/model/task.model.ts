import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { User } from "./user.model";

export class Task extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public isCompleted!: string;
}

Task.init(
  {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    isCompleted:{type:DataTypes.BOOLEAN, defaultValue:false}
  },
  { sequelize, modelName: "task" }
);

Task.belongsTo(User, { as: "assignedTo" });
User.hasMany(Task);
