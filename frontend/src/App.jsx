import React from "react";
import "./App.css";
import FloatingShape from "./components/FloatingShape.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage.jsx";
import { Routes, Route } from "react-router-dom";
import EmailVerificationPage from "./pages/EmailVerificationPage.jsx";
// eslint-disable-next-line no-unused-vars
import { Toaster } from "react-hot-toast";
import useAuthStore from "./store/authStore.jsx";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import ResetPasswordPage from "./pages/ResetPasswordPage.jsx";
import { Navigate } from "react-router-dom";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (!isAuthenticated) {
		return <Navigate to='/login' replace />;
	}

	if (!user.isVerified) {
		return <Navigate to='/verify-email' replace />;
	}

	return children;
};


// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
	const { isAuthenticated, user } = useAuthStore();

	if (isAuthenticated && user.isVerified) {
		return <Navigate to='/' replace />;
	}

	return children;
};


function App() {

  const {isCheckingAuth,checkAuth} = useAuthStore();

  useEffect(() => {
    const checkUserAuth = async () => {
      await checkAuth();
    };

    checkUserAuth();
  }
  , [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;
  
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden"
    >
      <FloatingShape color="bg-green-500" size="w-64 h-64" top="0%" left="0%" delay={0} />
      <FloatingShape color="bg-emerald-500" size="w-48 h-48" top="70%" left="80%" delay={5} />
      <FloatingShape color="bg-lime-500" size="w-32 h-32" top="40%" left="10%" delay={2} />

      <Routes>
        <Route path="/" element={<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>} />
        <Route path="/signup" element={<RedirectAuthenticatedUser>
							    <SignUpPage />
						</RedirectAuthenticatedUser>} />
        <Route path="/login" element={<RedirectAuthenticatedUser>
							<LoginPage />
						</RedirectAuthenticatedUser>} />
        <Route path='/verify-email' element={<EmailVerificationPage />} />
        <Route path='/forgot-password' element={<RedirectAuthenticatedUser>
          <ForgotPasswordPage />
        </RedirectAuthenticatedUser>} />
        <Route path='/reset-password/:token' element={<RedirectAuthenticatedUser>
          <ResetPasswordPage />
        </RedirectAuthenticatedUser>} />
      </Routes>
    </div>
  );
}

export default App;