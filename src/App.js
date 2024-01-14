import logo from "./logo.svg";
import "./App.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import StudentMain from "./components/students/studentPage2";
import Experiment1 from "./components/students/Experiments/Experiment1";

import Booking2 from "./components/students/Booking2";
import StudentState from "./context/student/StudentState";

import Home from "./components/Home.js";
import StudentPage from "./components/students/StudentPage";
import Combineds from "./components/superviser/Combineds";
import Logins from "./components/Logins";
//import Booking from "./components/students/Booking";
import StudentDetails1 from "./components/superviser/StudentsDetails1";
import StudentDetailf from "./components/Faculty Incharge/StudentsDetailf";
import Loginf from "./components/Loginf";
import Combinedf from "./components/Faculty Incharge/combinedf";
import NotificationStudent from "./components/students/notification";
import StudentPage1 from "./components/students/StudentPage1";

function App() {
  return (
    <StudentState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logins" element={<Logins />} />
          <Route path="/loginf" element={<Loginf />} />
          <Route path="/combineds/:email" element={<Combineds />} />
          <Route path="/combinedf/:email" element={<Combinedf />} />
          <Route
            path="/notificationstudent/:email"
            element={<NotificationStudent />}
          ></Route>
          <Route
            path="/studentDetails1/:email/:jobId"
            element={<StudentDetails1 />}
          />
          <Route
            path="/studentDetailf/:email/:jobId"
            element={<StudentDetailf />}
          />

          <Route path="/student" element={<StudentPage />} />
          <Route path="/student/exp2" element={<StudentPage1 />} />
          <Route path="/studentMain/:email" element={<StudentMain />} />
          <Route path="/:exp/:bookedEmail" element={<Experiment1 />} />

          <Route path="/booking2/:email/:exp" element={<Booking2 />} />
        </Routes>
      </BrowserRouter>
    </StudentState>
  );
}

export default App;
