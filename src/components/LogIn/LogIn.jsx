import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LogIn.css';

const Login = () => {
  const [usuario, setUsuario] = useState({
    email: '',
    contraseña: '',
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/login', usuario);
      console.log(response.data);
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
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
            <span>Login</span>
          </div>
          <form action="#">
            <div className="row">
              <i className="fas fa-user"></i>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={usuario.email}
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
                value={usuario.contraseña}
                onChange={handleChange}
                required
              />
            </div>
            <div className="pass">
              <Link to="./home">Forgot password?</Link>
            </div>
            <div className="row button">
              <input type="button" value="Login" onClick={handleLogin} />
            </div>
            <div className="signup-link">
              Not a member? <Link to="/Register">Signup now</Link>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Login;