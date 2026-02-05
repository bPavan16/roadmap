import app from "./src/server";
import { sequelize } from "./src/config/database";

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
