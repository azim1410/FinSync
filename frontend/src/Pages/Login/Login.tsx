import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import { FcGoogle } from "react-icons/fc";
import './styles.css'

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email format
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    // Example: Password must be at least 8 characters and contain a mix of letters and numbers
    const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    if (name === "email" && value) {
      setErrors((prev) => ({
        ...prev,
        email: validateEmail(value) ? "" : "Invalid email address",
      }));
    }

    if (name === "password" && value) {
      setErrors((prev) => ({
        ...prev,
        password: validatePassword(value)
          ? ""
          : "Password must be at least 8 characters and include a number",
      }));
    }
  };

  const loginHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Final validation
    const emailError = credentials.email
      ? validateEmail(credentials.email)
        ? ""
        : "Invalid email address"
      : "Email is required";

    const passwordError = credentials.password
      ? validatePassword(credentials.password)
        ? ""
        : "Password must be at least 8 characters and include a number"
      : "Password is required";

    setErrors({ email: emailError, password: passwordError });

    if (!emailError && !passwordError) {
      console.log("Logging in with:", credentials);
      // Proceed with login
    }
  };

  return (
    <div className="container">
      <div className="login-container p-4">
        <h2 className="login-header mb-4">Log in</h2>
        <form action="" className="login-form" onSubmit={loginHandler}>
          <label htmlFor="email">Email address</label>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="form-input"
              value={credentials.email}
              onChange={handleChange}
            />
            {errors.email && <small className="error-text">{errors.email}</small>}
          </div>
          <label htmlFor="password">Password</label>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              className="form-input"
              value={credentials.password}
              onChange={handleChange}
            />
            {errors.password && (
              <small className="error-text ">{errors.password}</small>
            )}
          </div>
          <button
            type="submit"
            className={`btn ${
              !credentials.email || !validatePassword(credentials.password)
                ? "btn-disabled"
                : ""
            }`}
            disabled={
              !credentials.email || !validatePassword(credentials.password)
            }
          >
            Login
          </button>
          <div className="login-forgot-password">
            <Link
              to={"/forgot-password"}
              className="login-forgot-password-text"
            >
              Forgot your password?
            </Link>
          </div>

          <Divider>or</Divider>
          <button className="google-signin btn">
            <FcGoogle className="google-icon" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;