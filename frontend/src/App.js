import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddStudent from "./components/Students/add-student.component";
import StudentsList from "./components/Students/students-list.component";
import StudentDetails from "./components/Students/student-detail.component";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            {" "}
            Homepage
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/addStudent"} className="nav-link">
                Add Student
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Studentlist"} className="nav-link">
                Student List
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/addStudent" component={AddStudent} />
            <Route exact path="/Studentlist" component={StudentsList} />
            <Route exact path="/" component={StudentsList} />
            <Route exact path="/students/:id" component={StudentDetails} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
