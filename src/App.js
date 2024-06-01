import React, { lazy, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { themeChange } from 'theme-change';
import initializeApp from "./app/init";
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

          {/* <Route path="*" element={<Navigate to={token ? "/app/dashboard" : "/login"} replace />} /> */}

        </Routes>
      </Router>
    </>
  )
}

export default App;
