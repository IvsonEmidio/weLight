import mongoose from "mongoose";

export function databaseConnect() {
    return mongoose.connect(`${process.env.DB_HOST}/${process.env.DB_DATABASE}`);
}