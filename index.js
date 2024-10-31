import express from "express";
import { PORT, mongoDBURL } from "./config.js";

const app = express();


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.get('/', (req, res) =>{ res.send('Hello World!')});

mongoose
    .connect(mongoDBURL)
    .then(() => {console.log("MongoDB connected")})
    .catch((err) => {console.log(err)});