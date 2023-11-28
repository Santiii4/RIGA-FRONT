import React, { useState } from 'react';
import './Register.css'; // Asegúrate de que el nombre del archivo CSS sea correcto
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [usuario, setUsuario] = useState({
    email: '',
    nombre: '', 
    contraseña: '',
    confirmPassword: '',
  });

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/registrarse', usuario);
      console.log(response.data);
      window.alert('Usuario registrado correctamente');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      window.alert('Las contraseñas no coinciden');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevUsuario) => ({ ...prevUsuario, [name]: value }));
  };

  return (
    <body>
      <div className="container1">
        <div className="wrapper">
          <div className="title">
            <span>Register</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                name="nombre"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="contraseña"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Repeat Password"
                name="confirmPassword"
                onChange={handleChange}
                required
              />
            </div>
            <div className="row button">
              <input type="button" value="Register" onClick={handleRegister} />
            </div>
            <div className="signup-link">
              ¿Ya eres miembro? <Link to="/Login">Inicia sesión ahora</Link>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Register;