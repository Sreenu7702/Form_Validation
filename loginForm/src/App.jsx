import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function App() {
  function handleSubmit() {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Login Successful");
  }

  return (
    <div className="login">
      <h4>Login</h4>

      <form onSubmit={handleSubmit}>
        <div className="text_area">
          <input type="email" id="username" name="username" placeholder="Enter Email" className="text_input"
          />
        </div>

        <div className="text_area">
          <input type="password" id="password" name="password" placeholder="Enter Password" className="text_input"
          />
        </div>

        <input type="submit" value="LOGIN" className="btn"
        />
      </form>

      <a className="link" href="signup">
        Sign Up
      </a>
    </div>
  );
}

export default App;