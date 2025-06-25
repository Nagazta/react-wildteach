import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../Components/Card';
import Sidebar from '../../Components/Sidebar';
import Header from '../../Components/Header';
import menuTutor from './Routes/MenuTutor';
import '../../Pages/Styles/Sessions.css';

const sessionsData = [
  { student: 'Juan Dela Cruz', subject: 'Math', date: '2025-06-01', duration: '1 hr', month: 'June', year: 2025 },
  { student: 'Maria S.', subject: 'Science', date: '2025-06-05', duration: '1.5 hrs', month: 'June', year: 2025 },
  { student: 'Pedro R.', subject: 'English', date: '2025-06-10', duration: '1 hr', month: 'June', year: 2025 },
];

const Sessions = () => {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');

  return (
    <div className="tutor-dashboard bright-theme">
      <Sidebar menuItems={menuTutor(navigate)} />
      <div className="content">
        <Header tutorName="Maria" />

        <div className="manage-sessions-page">
          <h1>Manage Sessions</h1>

          <div className="filters">
            <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
              <option value="">Select year</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>

            <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
              <option value="">Select month</option>
              <option value="January">January</option>
              <option value="June">June</option>
            </select>
          </div>

          <div className="session-cards">
            {sessionsData.map((session, i) => (
              <Card key={i} className="session-card">
                <strong>Student Name:</strong> {session.student} <br />
                Subject: {session.subject} <br />
                Date: {session.date} <br />
                Duration: {session.duration} <br />
                Month: {session.month} <br />
                Year: {session.year}
                <div className="buttons">
                  <button className="edit-btn">Edit</button>
                  <button className="cancel-btn">Cancel</button>
                </div>
              </Card>
            ))}
          </div>

          <div className="pagination">
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sessions;
