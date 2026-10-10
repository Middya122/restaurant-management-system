import ErrorHandler from "../error/error.js";
import {Reservation}from "../models/reservationSchema.js";



export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phoneNumber, time, date } = req.body;
    if (!firstName || !lastName || !email || !phoneNumber || !time || !date) {
        return next(new ErrorHandler("Please provide all required fields", 400));
    }
    try {  // Try to create a new reservation in the database
        await Reservation.create({  // Create a new reservation document in the database using the Reservation model
            firstName,
            lastName,
            email,
            phoneNumber,
            time,
            date,
        });
        res.status(201).json({  // Send a JSON response with a success message and a 201 Created status code
            success: true,
            message: "Reservation sent successfully",
        });
    } catch (error) {
        if (error.name === "ValidationError") {  // Check if the error is a validation error
            const validationErrors = Object.values(error.errors).map((err) => err.message);  // Extract the validation error messages from the error object
            return next(new ErrorHandler(validationErrors.join(", "), 400));
        };
        return next(new ErrorHandler(validationErrors.join(", ") , 500));
    }

} 