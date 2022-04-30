import express from "express";
import publicRoutesMiddleware from "./Middlewares/publicRoutes";
import * as dotenv from "dotenv";

const app = express();
const port = 3000;

//.env file configuration
dotenv.config();

//Middleware
publicRoutesMiddleware(app);

try {
    app.listen(port, () => {
        console.log(`Successfully connected to port ${port}`);
    })
} catch (err) {
    console.error(`An error has occurred when starting the server on port ${port}`);
}