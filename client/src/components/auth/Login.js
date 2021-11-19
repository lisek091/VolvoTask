import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import { Navigate } from 'react-router-dom';
const Login = props => {
  const authContext = useContext(AuthContext);
  const alertContext = useContext(AlertContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  useEffect(() => {
    if (error === 'Invalid credientials') {
      setAlert(error, 'danger');
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      setAlert('Please fill in all fields', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };
  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <input
          type="submit"
          value="login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
