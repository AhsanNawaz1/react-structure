import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/auth/signIn';
import SignUp from "./Pages/auth/signUp";
import { useSelector } from 'react-redux';
import { PublicRoute } from "./shared/utils/constant"
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./Styles/mediaQuery.scss";
import CRUD from './Pages/App/CRUD';


function App() {
  const user = useSelector((state) => state.root.user);
  const location = useLocation();



  return (
    <>
      <Routes>
        {user.user != null ?
          <>
            <Route exact path="/" element={<CRUD />} />
          </> :
          <>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
          </>
        }
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
