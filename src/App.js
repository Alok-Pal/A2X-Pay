import React, { lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import initializeApp from "./app/init";
import checkAuth from "./app/auth";
import { themeChange } from 'theme-change'
import Layout from "./containers/Layout";

const Login = lazy(() => import('./pages/Login'))

initializeApp()

// const token = checkAuth()

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* Place new routes over this */}
          <Route path="/app/*" element={<Layout />} />

          {/* <Route path="*" element={<Navigate to={token ? "/app/welcome" : "/login"} replace />} /> */}

        </Routes>
      </Router>
    </>
  )
}

export default App;
