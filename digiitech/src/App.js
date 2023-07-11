import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// AdminPanel
import Authentication from './AdminPanel/Components/Authentication/Authentication';
import ForgetPasswordForm from './AdminPanel/Components/ForgetPassword/ForgetPasswordForm';
import NewPasswordForm from './AdminPanel/Components/NewPasswordScreen/NewPasswordForm';
import Dashboard from './AdminPanel/Components/Dashboard/Dashboard';
// HomePage
import HomePage from './components/HomePage';
import CoursesPage from "./components/CoursesPage";
import CorporateTraining from "./components/CorporateTraining";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AdminPanel" element={<Authentication />} />
        <Route path="/forgotPassword" element={<ForgetPasswordForm />} />
        <Route path="/newPassword" element={<NewPasswordForm />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* Add more routes here */}
        <Route path="/corptrain-link" element={<CorporateTraining />} />
        <Route path="/courses-link" element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;

