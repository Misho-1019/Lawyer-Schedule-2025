import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('It works!');
})

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}...`))
