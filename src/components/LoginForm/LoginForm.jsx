"use client";
import React, { useEffect, useState, useRef } from "react";
import Login from "./Login.jsx";
import Cookies from "js-cookie";

const LoginForm = ({ toggleForm }) => {
  //se generan los estados de usuario y contraseña
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [id, setId] = useState("");
  const [access_token, setAccess_token] = useState("");
  const [refresh_token, setRefresh_token] = useState("");

  //se referencia el spiner y el formulario
  const loader = useRef();
  const form = useRef();

  //se ejecuta cuando el estado de respuesta cambia
  useEffect(() => {
    if (response === 200) {
      loader.current.classList.add("hidden-auth");
      form.current.classList.remove("hidden-auth");
      setResponse("");
      //cookies
      Cookies.set("id", id, { expires: 1 });
      Cookies.set("access_token", access_token, { expires: 1 });
      Cookies.set("refresh_token", refresh_token, { expires: 1 });
      console.log("id:", id);
      console.log("access_token:", access_token);
      console.log("refresh_token:", refresh_token);
    }
  }, [response]);

  // funcion para manejar el envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    loader.current.classList.remove("hidden-auth");
    form.current.classList.add("hidden-auth");

    // Aquí iría la lógica para enviar los datos del formulario al backend
    Login(username, password, setResponse,setId, setAccess_token, setRefresh_token);
  };

  return (
    <>
      <span className="loader hidden-auth spiner" ref={loader}></span>
      <form
        onSubmit={handleSubmit}
        className="login-form front card"
        ref={form}
      >
        <h2 className="form-title">Inicia Sesión</h2>
        <div className="form-group">
          <label htmlFor="username" className="label">
            Nombre de Usuario:
          </label>
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
            <label htmlFor="password" className="label">
              Contraseña:
            </label>
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
          <span onClick={() => toggleForm()} className="span">
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
