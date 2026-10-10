class ErrorHandler extends Error {  // Custom error class to handle errors
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export const errorMiddleware = (err, req, res, next) => {  // Middleware function to handle errors
    const statusCode = err.statusCode || 500;  // Default to 500 Internal Server Error if no status code is provided
    const message = err.message || "Internal Server Error"; 

    return res.status(statusCode).json({  // Send a JSON response with the error details
        success: false, // Indicate that the request was not successful
        message: message,
    });
}




export default ErrorHandler;  // Export the custom error class for use in other parts of the application