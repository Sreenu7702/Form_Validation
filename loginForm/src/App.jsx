import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  function handleSubmit(e) {
    e.preventDefault();
    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    const emailBox = document.getElementById("emailBox");
    const passwordBox = document.getElementById("passwordBox");

    emailError.textContent = "";
    passwordError.textContent = "";

    emailBox.classList.remove("input-error");
    passwordBox.classList.remove("input-error");

    let isValid = true;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  
    if (email === "") {
      emailError.textContent = "Email is required";
      emailBox.classList.add("input-error");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Enter a valid email address";
      emailBox.classList.add("input-error");
      isValid = false;
    }

    
    if (password === "") {
      passwordError.textContent = "Password is required";
      passwordBox.classList.add("input-error");
      isValid = false;
    } else if (!passwordPattern.test(password)) {
      passwordError.textContent =
        "Password must contain uppercase, lowercase, number, special character and be at least 8 characters";
      passwordBox.classList.add("input-error");
      isValid = false;
    }

    if (isValid) {
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Login Successful");
    }
  }

  return (
    <div className="login">
      <h4>Login</h4>

      <form onSubmit={handleSubmit}>
        <div className="text_area" id="emailBox">
          <input
            type="email"
            id="username"
            name="username"
            placeholder="Enter Email"
            className="text_input"
          />
        </div>
        <p id="emailError" className="error"></p>

        <div className="text_area" id="passwordBox">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="text_input"
          />
          
        </div>
        <p id="passwordError" className="error"></p>

        <input
          type="submit"
          value="LOGIN"
          className="btn"
        />
      </form>

      <a className="link" href="signup">
        Sign Up
      </a>
    </div>
  );
}

export default App;