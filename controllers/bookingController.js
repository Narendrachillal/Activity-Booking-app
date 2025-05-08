import Booking from "../models/Booking.js";

export const bookActivity = async (req, res) => {
  const { activityId } = req.body;
  try {
    const booking = await Booking.create({
      user: req.user,
      activity: activityId,
    });
    res.json({ message: "Activity booked", booking });
  } catch (err) {
    res.status(400).json({ message: "Booking failed", error: err.message });
  }
};

export const getMyBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user }).populate("activity");
  res.json(bookings);
};
