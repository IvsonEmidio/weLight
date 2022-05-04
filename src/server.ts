import express from "express";
import publicRoutesMiddleware from "./middlewares/publicRoutes";
import * as dotenv from "dotenv";
import {databaseConnect} from "./database/config";

dotenv.config();

const app = express();
const port = process.env.PORT;

databaseConnect().then(() => {
    console.log(`Successfully connected to database.`)
}).catch((err) => {
    console.error(`An fatal error has occurred when connecting to database. ${err}`)
});

publicRoutesMiddleware(app);

try {
    app.listen(port, () => {
        console.log(`Successfully started server on port ${port}`);
    })
} catch (err) {
    console.error(`An error has occurred when starting the server on port ${port}`);
}