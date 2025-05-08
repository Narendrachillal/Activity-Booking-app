import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Activity from "./models/Activity.js";

dotenv.config();
connectDB();

const seedActivities = async () => {
  await Activity.deleteMany();

  await Activity.insertMany([
    {
      title: "Cricket Match",
      description: "IPL Final 2025 at M. Chinnaswamy Stadium",
      location: "Bangalore",
      date: new Date("2025-05-20 19:00"),
    },
    {
      title: "Movie Night",
      description: "Avengers: Endgame Screening in 3D IMAX",
      location: "PVR Orion Mall",
      date: new Date("2025-05-21 18:30"),
    },
    {
      title: "Football Match",
      description: "India vs Bangladesh Friendly Match",
      location: "Kanteerava Stadium",
      date: new Date("2025-05-25 17:00"),
    },
    {
      title: "Standup Comedy Show",
      description: "Open Mic Night with Bangalore’s Best Comics",
      location: "The Humming Tree",
      date: new Date("2025-05-22 20:00"),
    },
    {
      title: "Music Concert",
      description: "Arijit Singh Live Concert 2025",
      location: "Phoenix Marketcity",
      date: new Date("2025-06-01 19:00"),
    },
    {
      title: "Cycling Marathon",
      description: "50KM City Cycling Challenge",
      location: "Cubbon Park",
      date: new Date("2025-05-30 06:00"),
    },
    {
      title: "Coding Bootcamp",
      description: "Fullstack JavaScript Crash Course",
      location: "WeWork Indiranagar",
      date: new Date("2025-05-28 10:00"),
    },
    {
      title: "Yoga Workshop",
      description: "Mindfulness & Meditation with Priya",
      location: "Lalbagh Botanical Garden",
      date: new Date("2025-05-24 07:00"),
    },
    {
      title: "Art Exhibition",
      description: "Modern Art Gallery - Summer Collection",
      location: "National Gallery of Modern Art",
      date: new Date("2025-05-29 11:00"),
    },
    {
      title: "Food Festival",
      description: "Street Food Carnival 2025",
      location: "UB City",
      date: new Date("2025-06-03 12:00"),
    },
  ]);

  console.log("Activities seeded");
  process.exit();
};

seedActivities();
