import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes.js";
dotenv.config();

const app = express();

try {
    const uri = process.env.URI;
    mongoose.connect(uri)

    console.log('DB Connected successfully!');
} catch (error) {
    console.log('Cannot connect to DB!');
    console.error(error.message);
}

app.get('/', (req, res) => {
    res.send('It works!');
})

app.use(router)

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}...`))
