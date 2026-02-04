import express from "express";

import userRouter from "./routes/user.route.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "SERVER IS RUNNING FINE",
    date: new Date().toISOString(),
  });
});

app.get("/health", (req, res) => {
  res.json({
    message: "HEALTH FINE",
    date: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON http://localhost:${PORT}/`);
});
