import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';

//Student pages
import StudentDashboard from './Pages/StudentPage/StudentDashboard';

//Tutor pages
import TutorDashboard from './Pages/TutorPage/TutorDashboard';
import Sessions from './Pages/TutorPage/Sessions';

// Admin pages
import AdminDashboard from './Pages/AdminPage/AdminDashboard';
import ManageUsers from './Pages/AdminPage/ManageUsers';
import SessionManage from './Pages/AdminPage/SessionManage';
import Announcements from './Pages/AdminPage/Announcements';
import Settings from './Pages/AdminPage/Settings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Student Dashboards */}
        <Route path="/studentDashboard" element={<StudentDashboard />} />

        {/*Tutor Routes*/}
        <Route path="/tutor/dashboard" element={<TutorDashboard />} />
        <Route path="/tutor/manageSessions" element={<Sessions />} />

        {/* Admin Routes */}
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/manageUsers" element={<ManageUsers />} />
        <Route path="/sessionManage" element={<SessionManage />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
