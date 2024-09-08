"use client";
import React, { useEffect, useState, useRef } from "react";
import Register from "./Register";

const RegisterForm = ({ toggleForm }) => {

  //se generan los estados de usuario y contraseña
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [response, setResponse] = useState("");

  //se referencia el spiner y el formulario
  const loader = useRef();
  const form = useRef();

  //se ejecuta cuando el estado de respuesta cambia
  useEffect(() => {
    if (response === 200) {
      toggleForm();
      setResponse("");
      loader.current.classList.add("hidden-auth");
      form.current.classList.remove("hidden-auth");
    }
  }, [response]);

  // funcion para manejar el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    loader.current.classList.remove("hidden-auth");
    form.current.classList.add("hidden-auth");

    // Aquí iría la lógica para enviar los datos del formulario al backend
    if (password === repeatpassword) {
      Register(username, password, useremail, setResponse);
    } else {
      alert("Las contraseñas no coinciden");
    }
  };

  return (
    <>
      <span className="loader hidden-auth spiner" ref={loader}></span>
      <form onSubmit={handleSubmit} className="login-form card" ref={form}>
        <h2 className="form-title">Registrate</h2>
        <div className="form-group">
          <label htmlFor="username" className="label">Nombre de Usuario:</label>
          <input
            required
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <label htmlFor="useremail" className="label">Correo Electrónico:</label>
        <input
          required
          type="email"
          id="useremail"
          value={useremail}
          onChange={(e) => setUseremail(e.target.value)}
        />
        <div className="form-group flex-register back">
          <div className="password-input">
            <label htmlFor="password" className="label">Contraseña:</label>
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
            <label htmlFor="repeatpassword" className="label">Repetir Contraseña:</label>
            <input
              required
              type="password"
              id="repeatpassword"
              value={repeatpassword}
              onChange={(e) => setRepeatpassword(e.target.value)}
            />
          </div>
        </div>
        <span onClick={() => toggleForm()} className="span">
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
