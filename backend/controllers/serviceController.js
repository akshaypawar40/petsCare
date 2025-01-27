import asyncHandler from "express-async-handler";
import Service from "../models/serviceModel.js";
import generateToken from "../utils/generateToken.js"; // Assuming you have this utility function

// @desc    Create a new service
// @route   POST /api/services
// @access  Private/Admin
const createService = asyncHandler(async (req, res) => {
  try {
    const { title, description, price } = req.body;

    // Check if all required fields are provided
    if (!title || !description || !price) {
      res.status(400);
      throw new Error("Please provide all fields");
    }

    // Create a new service document
    const service = new Service({
      title,
      description,
      price,
    });

    // Save the service to the database
    const createdService = await service.save();

    // Send response after successfully creating the service
    res.status(201).json({
      message: "Service created successfully by Admin", // Success message
      _id: createdService._id,
      title: createdService.title,
      description: createdService.description,
      price: createdService.price,
    });
  } catch (error) {
    // Catch any errors and send appropriate response
    res.status(500).json({
      message:
        error.message || "Something went wrong while creating the service",
    });
  }
});

// @desc    Get all services
// @route   GET /api/services
// @access  Public
const getServices = asyncHandler(async (req, res) => {
  try {
    // Fetch all services
    const services = await Service.find({});

    // Return success response
    res.status(200).json({
      message: "Services fetched successfully",
      services,
    });
  } catch (error) {
    // Catch and handle any errors
    res.status(500).json({
      message: error.message || "Something went wrong while fetching services",
    });
  }
});

// @desc    Get a single service by ID
// @route   GET /api/services/:id
// @access  Public
const getSingleService = asyncHandler(async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      res.status(404).json({
        message: "Service not Found",
      });
    }

    // Return success response with service details
    res.status(200).json({
      message: "Service fetched successfully",
      service,
    });
  } catch (error) {
    // Catch and handle any errors
    res.status(500).json({
      message:
        error.message || "Something went wrong while fetching the service",
    });
  }
});

// @desc    Update a service
// @route   PUT /api/services/:id
// @access  Private/Admin
const updateService = asyncHandler(async (req, res) => {
  try {
    const { title, description, price } = req.body;

    // Find the service by ID
    const service = await Service.findById(req.params.id);

    // If service not found, throw an error
    if (!service) {
      res.status(404);
      throw new Error("Service not found");
    }

    // Update the service fields
    service.title = title || service.title;
    service.description = description || service.description;
    service.price = price || service.price;

    // Save the updated service
    const updatedService = await service.save();

    // Send a success response with the updated service data
    res.json({
      message: "Service updated successfully",
      _id: updatedService._id,
      title: updatedService.title,
      description: updatedService.description,
      price: updatedService.price,
    });
  } catch (error) {
    // Catch any errors and send a JSON error message
    res.status(500).json({
      message:
        error.message || "Something went wrong while updating the service",
    });
  }
});

// @desc    Delete a service
// @route   DELETE /api/services/:id
// @access  Private/Admin
const deleteService = asyncHandler(async (req, res) => {
  const service = await Service.findById(req.params.id);

  if (!service) {
    res.status(404).json({
      message: "Service not Found",
    });
  }

  await service.deleteOne();
  res.json({ message: "Service removed" });
});

export {
  createService,
  getServices,
  getSingleService,
  updateService,
  deleteService,
};
