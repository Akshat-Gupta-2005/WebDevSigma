import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(cors());
dotenv.config();
// app.use(express.json());    

mongoose.connect(process.env.MONGO_URL, {
}).then(() => console.log("MongoDB connected")).catch((err) => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/getData", (req, res) => {
    res.send("Hello");
});

app.listen(3001, () => console.log("app is running"));



