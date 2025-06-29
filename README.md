MERN Advanced Authentication System
A secure, full-stack authentication system built with the MERN stack (MongoDB, Express.js, React, Node.js). This project features user signup/login, OTP-based email verification, and welcome emails, ensuring only verified users are registered. Ideal for integrating into web applications like blogs or e-commerce platforms.
Features

User Signup/Login: Secure registration and login with JWT authentication and bcrypt password hashing.
OTP Verification: Users receive an OTP via email (using Brevo) to verify their account before registration.
Welcome Email: A personalized welcome email is sent upon successful registration.
Data Integrity: Unverified credentials are not saved to MongoDB Atlas.
Responsive Frontend: React-based UI with Tailwind CSS for signup, OTP verification, and login forms.

Tech Stack

Frontend: React, Tailwind CSS, Vite
Backend: Node.js, Express.js, JWT, bcrypt, nodemailer
Database: MongoDB Atlas
Email Service: Brevo (9,000 emails/month free plan)
Other: dotenv, cors, crypto (for OTP generation)
 

Prerequisites

Node.js (v16 or higher)
MongoDB Atlas account
MailTrap account (for email verification)
Docker (optional, for Mailpit testing)

Setup Instructions

Clone the Repository:
git clone https://github.com/yourusername/auth-tutorial.git
cd auth-tutorial


Install Dependencies:

Backend:cd backend
npm install


Frontend:cd frontend
npm install




Configure Environment Variables:

Create backend/.env:MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
BREVO_SMTP_USER=your_brevo_smtp_user
BREVO_SMTP_KEY=your_brevo_smtp_key




Run the Backend:
cd backend
npm run dev


Server runs on http://localhost:3000.


Run the Frontend:
cd frontend
npm run dev


Frontend runs on http://localhost:5173.


Test Email Verification (Optional):

For testing, use Mailpit:docker run -p 8025:8025 -p 1025:1025 axllent/mailpit


Update auth.controller.js to use host: "localhost", port: 1025, secure: false.
View emails at http://localhost:8025.



Usage

Integrate: Add this authentication system to blogs, e-commerce, or other MERN apps for secure user management.
Learn: Study the code to understand JWT, OTP verification, and email integration with nodemailer and Brevo.
Extend: Build features like password recovery, user roles, or refresh tokens.
Portfolio: Deploy to Render (backend) and Vercel (frontend) for a live demo.

Testing

Signup:curl -X POST http://localhost:3000/api/auth/signup -H "Content-Type: application/json" -d '{"email":"test@example.com","password":"password123"}'


Check Brevo/Mailpit for OTP and welcome emails.
Verify OTP via frontend (http://localhost:5173/verify) or API.

Contributing
Feedback and contributions are welcome! Fork the repo, create a pull request, or open an issue for suggestions.

