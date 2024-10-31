import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";

const app = express();



app.get('/', (req, res) =>{ res.send('Hello World!')});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
        
        console.log("MongoDB connected")})
    .catch((err) => {console.log(err)});