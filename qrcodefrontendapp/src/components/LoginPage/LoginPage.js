import React from "react";
import "./login.css"; // Import your CSS file

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    const username = event.target.username.value;
    const password = event.target.password.value;

    // Add login logic here
    console.log("Username:", username);
    console.log("Password:", password);

    // Example: Check credentials or redirect
    alert("Login attempt submitted!");
  };

  return (
    <div className="wrapped">
      <h1>Log-in</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
            </svg>
          </label>
          <input
            type="text"
            name="username"
            id="username-input"
            placeholder="username"
            required
          />
        </div>
        <div>
          <label htmlFor="password-input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm240-200q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80Z" />
            </svg>
          </label>
          <input
            type="password"
            name="password"
            id="password-input"
            placeholder="password"
            required
          />
        </div>
        <button type="submit">Log-in</button>
      </form>
      <p>
        Don't have an account? <a href="../sign-up_page/signup.html">Sign Up</a>
      </p>
    </div>
  );
}

export default Login;
