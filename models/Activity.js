import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  date: Date,
});

const Activity = mongoose.model("Activity", activitySchema);
export default Activity;
