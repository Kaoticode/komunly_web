"use client";
import React, { useState } from 'react';
import './RegisterForm.css';
import Register from './Register';

const RegisterForm = ({toggleForm}) => {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatpassword, setRepeatpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos del formulario al backend
    if (password === repeatpassword) {
      Register(username, password, useremail);
    }else {
      alert('Las contraseñas no coinciden');
    }
  };



  return (
    <form onSubmit={handleSubmit} className="login-form back card">
      <h2 className="form-title"><li>Registrate</li></h2>
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
      <div className="form-group flex">
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
       <div>
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
      <span onClick={() => toggleForm()}>Ya tienes una cuenta? Inicia Sesión</span>
      <button type="submit" className="submit-button">Registrarme</button>
    </form>
  );
};

export default RegisterForm;