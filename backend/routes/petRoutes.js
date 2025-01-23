import express from "express";
import {
  createPet,
  getPets,
  getPetById,
  updatePet,
  deletePet,
  getVaccinationRecords,
} from "../controllers/petController.js";

import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create a new pet
router.post("/create", protect, createPet);

// Get all pets for a user
router.get("/", getPets);

// Get a single pet by ID
router.get("/:id", protect, getPetById);

// Update a pet
router.put("/:id", protect, updatePet);

// Delete a pet
router.delete("/:id", protect, deletePet);

// Get vaccination records for a pet
router.get("/:id/vaccination-records", protect, getVaccinationRecords);

export default router;
