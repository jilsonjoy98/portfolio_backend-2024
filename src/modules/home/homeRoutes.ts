import express from "express";
import * as HomeController from "./homeController";

const router = express.Router();

// Define routes
router.get("/", HomeController.getAllHomes); // Get all homes
router.get("/:id", HomeController.getHomeById); // Get home by ID
// router.post("/", HomeController.createHome); // Create a new home
router.put("/:id", HomeController.editHome); // Update a home by ID
router.delete("/:id", HomeController.deleteHome); // Delete a home by ID
router.post("/", HomeController.createSingleHome);
export default router;