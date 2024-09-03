"use client";
import React, { useEffect, useState } from "react";
import Register from "./Register";

const RegisterForm = ({ toggleForm }) => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [response, setResponse] = useState("");

  const loader = document.querySelector(".loader");
  const form = document.querySelector(".login-form");

  useEffect(() => {
    if (response === 200) {
      toggleForm();
      setResponse("");
      loader.classList.add("hidden");
      form.classList.remove("hidden");
    }
  }, [response]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loader.classList.remove("hidden");
    form.classList.add("hidden");

    // Aquí iría la lógica para enviar los datos del formulario al backend
    if (password === repeatpassword) {
      Register(username, password, useremail, setResponse);
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <>
      <span className="loader hidden spiner"></span>
      <form onSubmit={handleSubmit} className="login-form card">
        <h2 className="form-title">Registrate</h2>
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
        <label htmlFor="useremail">Correo Electrónico:</label>
        <input
          required
          type="email"
          id="useremail"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />
        <div className="form-group flex back">
          <div className="password-input">
            <label htmlFor="password">Contraseña:</label>
            <input
              required
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mr-2"
            />
          </div>
          <div className="password-input">
            <label htmlFor="repeatpassword">Repetir Contraseña:</label>
            <input
              required
              type="password"
              id="repeatpassword"
              value={repeatpassword}
              onChange={(e) => setRepeatpassword(e.target.value)}
            />
          </div>
        </div>
        <span onClick={() => toggleForm()}>
          Ya tienes una cuenta? Inicia Sesión
        </span>
        <button type="submit" className="submit-button">
          Registrarme
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
