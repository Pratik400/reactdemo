import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveStudents } from "../../slices/students";
import { Link } from "react-router-dom";

const StudentList = () => {
  // const [currentStudent, setCurrentStudnets] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);

  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const getAllStudents = useCallback(() => {
    dispatch(retrieveStudents());
  }, [dispatch]);

  useEffect(() => {
    getAllStudents();
  }, [getAllStudents]);

  // const setActiveStudnets = (studnet, index) => {
  //   setCurrentStudnets(studnet);
  //   setCurrentIndex(index);
  // };

  return (
    <div>
      <p>Student List</p>
      <ul>
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
                className="badge badge-warning"
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
};

export default StudentList;
