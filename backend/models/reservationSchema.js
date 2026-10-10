import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, "Please provide your first name"],
            trim: true, // Remove whitespace from both ends of the string
            minlength: [2, "First name must be at least 2 characters long"],
            maxlength: [50, "First name cannot exceed 50 characters"]
        },
        lastName: {
            type: String,
            required: [true, "Please provide your last name"],
            trim: true,
            minlength: [2, "Last name must be at least 2 characters long"],
            maxlength: [50, "Last name cannot exceed 50 characters"]
        },
        email: {
            type: String,
            required: [true, "Please provide your email address"],
            trim: true,
            unique: [true, "Email address is already in use"],
            validate: [validator.isEmail, "Please provide a valid email address"]
        },
        phoneNumber: {
            type: String,
            required: [true, "Please provide your phone number"],
            trim: true,
            minlength: [10, "Phone number must be at least 10 characters long"],
            maxlength: [15, "Phone number cannot exceed 15 characters"]
        },
        time: {
            type: String,
            required: [true, "Please provide a reservation time"],
        },
        date: {
            type: String,
            required: [true, "Please provide a reservation date"],
        },
    });



    export const Reservation = mongoose.model("Reservation", reservationSchema); 