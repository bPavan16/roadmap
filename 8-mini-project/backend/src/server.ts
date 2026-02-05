import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.routes.js";
// import taskRoutes from "./routes/task.routes";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(cors(
    {
        origin: "http://localhost:5173"
    }
))

app.use("/auth", authRoutes);
// app.use("/tasks", taskRoutes);


app.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        message:"Server is running"
    })
})

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        message:"Sever is healthy",
        time: new Date().toISOString()
    })
})



export default app;


