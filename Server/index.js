import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import dbConnect from "./config/database.js";
import morgan from "morgan";
import cors from "cors";
import fileUpload from 'express-fileupload';

const app = express();


dotenv.config();

// const corsOptions = {
//     origin: 'https://levelup-your-fitness.vercel.app',
//     optionsSuccessStatus: 200,
// };


const PORT = process.env.PORT || 4000;


app.use(express.json());
// app.use(cors(corsOptions));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));

app.use("/api/v1", router);


app.listen(PORT, () => {
    console.log(`Server Started Successfully at ${PORT}`)
})

dbConnect();

app.get("/", (req, res) => {
    res.send(`<h1>This is Homepage</h1>`);
})


