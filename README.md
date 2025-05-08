# 📌 Basic Activity Booking App (Backend API)

A simple RESTful backend API built with **Node.js**, **Express.js**, and **MongoDB** for booking activities like cricket matches, movies, football games, and more.  



---

## 📚 Features

- 📝 **User Registration & Login** (with JWT Authentication)
- 📃 **List Available Activities** (Public endpoint)
- 📌 **Book an Activity** (Authorized users only)
- 📑 **Get My Bookings** (View all bookings by the logged-in user)

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js (ES6 modules)
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT
- **API Testing:** Postman

---

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd activity-booking-backend
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Setup Environment Variables
```bash
MONGO_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-secret-key>
PORT=5000
```
### 4️⃣ Seed Activities Data
To populate the database with initial activities:

```bash
node seed/seed.js
```
### 5️⃣ Run the Server
```bash
npm run dev
```

## 📮 API Endpoints

🔐 Authentication

| Method | Endpoint             | Description                |
| :----- | :------------------- | :------------------------- |
| `POST` | `/api/auth/register` | Register a new user        |
| `POST` | `/api/auth/login`    | Login user & get JWT token |

📃 Activities (Public)
| Method | Endpoint          | Description                   |
| :----- | :---------------- | :---------------------------- |
| `GET`  | `/api/activities` | List all available activities |


📌 Bookings (Protected)
| Method | Endpoint           | Description                                          |
| :----- | :----------------- | :--------------------------------------------------- |
| `POST` | `/api/bookings`    | Book an activity (requires `activityId` in the body) |
| `GET`  | `/api/bookings/me` | Get logged-in user’s bookings                        |


📝 For protected routes, send JWT token in headers:
```bash 
Authorization: Bearer <token>
 ```

📦 Example Seeded Activities
- Cricket Match
 
- Movie Night

- Football Match

- Standup Comedy

- Music Concert

- Cycling Marathon

- Coding Bootcamp

- Yoga Workshop

- Art Exhibition

- Food Festival
