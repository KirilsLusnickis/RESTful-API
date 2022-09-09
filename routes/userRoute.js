import express from "express";
import { createCar,  getAllCars, getCarById, deleteCarById,  updateCar, deleteCarByYear } from "../controller/userController.js";
const router = express.Router();

router.post("/create", createCar);

router.get('/get', getAllCars);

router.get('/get/:id', getCarById);

router.delete('/delete/:id', deleteCarById);

router.put('/update/:id', updateCar);

router.delete('/deleteCarByYear/:year', deleteCarByYear);

export default router;