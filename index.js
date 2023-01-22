import express from "express";
import cors from "cors";
import MahasiswaRouter from "./routes/MahasiswaRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/",MahasiswaRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log("Server running......"));