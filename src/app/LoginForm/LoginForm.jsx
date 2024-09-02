"use client";
import React, { useState } from 'react';
import './LoginForm.css';
import Login from './Login.jsx';

const LoginForm = ({toggleForm}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario al backend
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form front card">
      <h2 className="form-title"><li>Inicia Sesión</li></h2>
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
        <span onClick={() => toggleForm()}>No tienes una cuenta? Registrate</span>
        <button type="submit" className='submit-button' onClick={() => Login(username, password)}>Inicia Sesión</button>
      </div>
    </form>
  );
};

export default LoginForm;