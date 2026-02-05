import express from "express";
import authRoutes from "./routes/auth.routes";
// import taskRoutes from "./routes/task.routes";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
// app.use("/tasks", taskRoutes);


app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is running"
    })
})

app.get('/health',(req,res)=>{
    res.status(200).json({
        message:"Sever is healthy",
        time: new Date().toISOString()
    })
})



export default app;
