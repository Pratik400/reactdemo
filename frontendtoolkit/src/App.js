import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddStudent from "./components/Students/AddStudent";
import StudentList from "./components/Students/StudentList";
import StudentProfile from "./components/Students/StudentProfile";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Student List
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/addStudent"} className="nav-link">
              Add Student
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link to={"/getAllStudent"} className="nav-link">
              Student List
            </Link>
          </li> */}
        </div>
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/addStudent" element={<AddStudent />} />
          <Route path="/getAllStudent" element={<StudentList />} />
          <Route path="/" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
