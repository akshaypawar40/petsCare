import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import Doctor from "../models/doctorModel.js";

/**
 * Middleware to protect routes by verifying JWT token
 */
const protect = asyncHandler(async (req, res, next) => {
  let token = null;

  // Check if token is provided in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token found. Authorization denied.",
    });
  }

  try {
    // Verify token and decode it
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user or doctor to the request object
    const doctor = await Doctor.findById(decoded.id).select("-password");
    const user = await User.findById(decoded.id).select("-password");

    if (doctor) {
      req.doctor = doctor;
    } else if (user) {
      req.user = user;
    } else {
      return res.status(401).json({
        success: false,
        message: "User not found. Invalid token.",
      });
    }

    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return res.status(401).json({
      success: false,
      message: "Not authorized. Invalid or expired token.",
    });
  }
});

/**
 * Middleware to check if the user is an admin
 */
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({
      success: false,
      message: "Access denied. Admin privileges required.",
    });
  }
};

/**
 * Middleware to check if the user is a doctor
 */
const doctor = asyncHandler(async (req, res, next) => {
  if (!req.doctor) {
    return res.status(403).json({
      success: false,
      message: "Access denied. Doctor privileges required.",
    });
  }

  // Fetch the doctor from the database (to ensure correctness)
  const doctor = await Doctor.findById(req.doctor._id);

  if (!doctor || !doctor.isDoctor) {
    return res.status(403).json({
      success: false,
      message:
        "Access denied. Only registered doctors can perform this action.",
    });
  }

  req.doctor = doctor; // Ensure doctor data is attached to request
  next();
});

export { protect, admin, doctor };
