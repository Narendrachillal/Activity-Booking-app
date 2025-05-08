import Activity from "../models/Activity.js";

export const getActivities = async (req, res) => {
  const activities = await Activity.find();
  res.json(activities);
  console.log(activities);
};
