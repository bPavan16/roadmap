import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database.js";
import { User } from "./user.model.js";

export class Task extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare isCompleted: boolean;
  declare assignedToId: number;
}

Task.init(
  {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    assignedToId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  { sequelize, modelName: "task" },
);

Task.belongsTo(User, { as: "assignedTo", foreignKey: "assignedToId" });
User.hasMany(Task, { as: "tasks", foreignKey: "assignedToId" });
