"use client";
import React, { useEffect, useState } from "react";
import Login from "./Login.jsx";

const LoginForm = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [access_token, setAccess_token] = useState("");
  const [refresh_token, setRefresh_token] = useState("");

  const loader = document.querySelector(".loader");
  const form = document.querySelector(".login-form");

  useEffect(() => {
    if (response === 200) {
      loader.classList.add("hidden");
      form.classList.remove("hidden");
      setResponse("");
      console.log("access_token:", access_token);
      console.log("refresh_token:", refresh_token);
    }
  }, [response]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loader.classList.remove("hidden");
    form.classList.add("hidden");
    
    // Aquí iría la lógica para enviar los datos del formulario al backend
    Login(username, password, setResponse, setAccess_token, setRefresh_token);
  };

  return (
    <>
      <span className="loader hidden spiner"></span>
      <form onSubmit={handleSubmit} className="login-form front card ">
        <h2 className="form-title">Inicia Sesión</h2>
        <div className="form-group">
          <label htmlFor="username">Nombre de Usuario:</label>
          <input
            required
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <span onClick={() => toggleForm()}>
            No tienes una cuenta? Registrate
          </span>
          <button type="submit" className="submit-button">
            Inicia Sesión
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
