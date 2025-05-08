import express from "express";
import {
  bookActivity,
  getMyBookings,
} from "../controllers/bookingController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/book", protect, bookActivity);
router.get("/my-bookings", protect, getMyBookings);

export default router;
