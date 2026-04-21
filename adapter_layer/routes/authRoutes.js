import express from 'express';
// Fixed: was authControllers.js (wrong filename) → authController.js
import * as AuthController from '../controllers/authController.js';

const authRoutes = express.Router();

authRoutes.post('/register', AuthController.registerStudent);

export default authRoutes;