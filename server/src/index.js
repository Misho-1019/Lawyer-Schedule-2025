import express from "express";
import dotenv from "dotenv";
import router from "./routes.js";
dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('It works!');
})

app.use(router)

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}...`))
