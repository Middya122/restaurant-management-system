import express from "express";
import { sendReservation } from "../controller/reservationC.js";

const router = express.Router();  //Create a new router instance to define routes for the reservation functionality

router.post("/send", sendReservation);

export default router;  // Export router instance to be used in other parts of the application