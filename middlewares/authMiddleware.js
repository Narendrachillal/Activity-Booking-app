import jwt from "jsonwebtoken";

const protect = (req, res, next) => {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "No token, access denied" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.id;
    console.log("Decoded User ID:", decoded.id);
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    res.status(400).json({ message: "Invalid token" });
  }
};

export default protect;
