import express, { response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";


dotenv.config();  //initialize dotenv

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json()); //must middleware

app.get('/', (req,res) => {
    return res.status(234).send("Welcome to MERN Stack Tutorial")
});

app.use('/books',booksRoute) //express router middleware

mongoose.connect(process.env.MONGO_URI)
.then (() => {
    console.log("App connected to database");
    app.listen (PORT, () => {
        console.log(`This app is also listening to port: ${PORT}`)
    }) 
})
.catch((err) => {
    console.log(err)
})