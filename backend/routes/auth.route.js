import express from 'express';
import {login,signup,logout,forgotPassword,verifyEmail,resetPassword,checkAuth} from '../controllers/auth.controller.js'; // Import the auth controller functions
import { verifyToken } from '../middleware/verifyToken.js'; 


const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth); // Check if the user is authenticated
router.post("/signup", signup); // Use the signup function from the controller

router.post("/login", login); // Use the login function from the controller  
router.post("/logout", logout); // Use the logout function from the controller

router.post("/forgot-password", forgotPassword); // Use the forgotPassword function from the controller
router.post("/reset-password/:token", resetPassword); // Use the resetPassword function from the controller

router.post("/verify-email", verifyEmail);

export default router;