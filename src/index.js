import express from "express";
import myRouter from './routes/index.js';

const app = express();

app.use(myRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
