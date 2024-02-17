import React, { Component } from "react";
import { connect } from "react-redux";
import { retrieveStudents, selectStudent } from "../../actions/students";
import { Link } from "react-router-dom";

class StudentsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStudent: null,
      currentIndex: -1,
      searchTitle: "",
    };
  }

  componentDidMount() {
    this.props.retrieveStudents();
  }

  setActiveStudent(student, index) {
    this.setState({
      currentStudent: student,
      currentIndex: index,
    });
  }

  render() {
    const { students } = this.props;

    return (
      <div>
        <br />
        <h4>Student LIST</h4>
        <br />
        <ul className="p-0">
          {students && Array.isArray(students) ? (
            // console.log(this.students);

            students.map((student, index) => (
              <li className="list-group-item" key={student.studentId}>
                {student.studentId} {"- "}
                {student.userId} {"- "}
                {student.firstName} {"- "}
                {student.lastName} {"- "}
                {student.emailAddress} {"- "}
                {student.contactNo} {"- "}
                {student.courseCode} {"- "}
                {student.specialisationCode} {"- "}
                {student.yearEnrolled} {"- "}
                {student.nationality}
                <Link
                  to={"/students/" + student.studentId}
                  className="btn btn-sm btn-link"
                >
                  Edit
                </Link>
                {/* <button
                  className="btn btn-sm btn-link"
                  onClick={() => this.setActiveStudent(student, student.userId)}
                >
                  See more
                </button> */}
              </li>
            ))
          ) : (
            <li>No students available</li>
          )}
        </ul>
      </div>
    );
  }
}

// StudentsList.propTypes = {};
const mapStateToProps = (state) => {
  return {
    students: state.students,
  };
};

// export default StudentsList;
export default connect(mapStateToProps, {
  retrieveStudents,
})(StudentsList);
