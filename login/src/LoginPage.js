import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState(""); // Added state for login message

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        loginData
      );
      const { message } = response.data; // No 'success' field needed, just the message
      setLoginMessage(message.toString()); // Set the login message

      if (message === "Login successful") {
        // Handle successful login here, such as redirecting to another page
        setLoginMessage("Login successfull");
      } else {
        setLoginMessage("Login failed");
      }
    } catch (error) {
      setLoginMessage(error.toString());
    }
    setLoginData({
      username: "",
      password: "",
    });
  }

  return (
    <div>
      <h1>Login page</h1>
      <h1>{loginMessage}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={loginData.username}
          placeholder="username"
          onChange={handleLogin}
          required
        />
        <input
          type="password"
          name="password"
          value={loginData.password}
          placeholder="password"
          onChange={handleLogin}
          required
        />
        <button type="submit">Login</button>
        <p>
          not registered ?<Link to="/registration">Register</Link>
        </p>
      </form>
    </div>
  );
}
