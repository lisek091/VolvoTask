import './App.css';
import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import OrderState from './context/order/OrderState';
import AuthState from './context/auth/AuthState';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertState from './context/alert/AlertState';
import Alerts from './components/layout/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';
const App = () => {
  return (
    <AuthState>
      <OrderState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Routes>
                  <PrivateRoute path="/" element={<Home />}></PrivateRoute>
                  <Route path="/about" element={<About />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </OrderState>
    </AuthState>
  );
};

export default App;
