import app from "./src/server.js";

import { sequelize } from "./src/config/database.js";

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});
