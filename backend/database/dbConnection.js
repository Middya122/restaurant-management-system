import mongoose from "mongoose";

export const dbConnection = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbname : "restaurant"
    }).then(() => {
        console.log("Database connected successfully");
    }).catch((error) => {
        console.error("Error connecting to database:", error);
    });
};