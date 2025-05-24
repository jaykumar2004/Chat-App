import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import messageRoutes from "./routes/message.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);

app.listen(PORT, () => {
  console.log(`Server is successfully listening on PORT : ${PORT}`);
  connectDB();
});
