import dotenv from "dotenv"
//Load all the environment variables from .env file into process.env
dotenv.config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {connectToMongoDB} from "./src/config/mongodb.js";
import swagger from "swagger-ui-express";
import apiDocs from "./swagger.json" assert {type: "json"};
import ApplicationError from "./src/error-handler/applicationError.js";
import productRouter from "./src/features/product/product.routes.js";

const server = express();

var corsOptions = {
    origin: "*", // Allows all origins (all ports)
  };

server.use(cors(corsOptions));

server.use(bodyParser.json());

server.use("/api-docs", swagger.serve, swagger.setup(apiDocs));

server.use("/api/tongadive", productRouter) 

server.use((err, req, res, next) => {
    console.log("Application error",err);
    if(err instanceof ApplicationError) {
        return res.status(err.status).send(err.message);
    }
    res.status(500).send('Something went wrong');
    // next();
})

server.use((req,res) => {
    res.status(404).send("API not found");
})


server.listen(process.env.PORT, () => {
    console.log("Server started on port", process.env.PORT); 
    connectToMongoDB();
})