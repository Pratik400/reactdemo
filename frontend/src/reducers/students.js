import {
  CREATE_STUDENT,
  RETRIEVE_STUDENTS,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../actions/types";

const initialState = {
  students: null,
  selectedStudent: null,
  // other relevant state properties
};

function studentReducer(students = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_STUDENT:
      return [...students, payload];

    case RETRIEVE_STUDENTS:
      return payload;

    // case UPDATE_STUDENT:
    //   return students.map((student) => {
    //     console.log(student);
    //     if (student.studentId === payload.studentId) {
    //       return {
    //         ...student,
    //         ...payload,
    //       };
    //     } else {
    //       return student;
    //     }
    //   });

    case UPDATE_STUDENT:
      return {
        ...students,
        students: (students.students || []).map((student) => {
          if (student.studentId === payload.studentId) {
            return {
              ...student,
              ...payload,
            };
          } else {
            return student;
          }
        }),
      };

    case DELETE_STUDENT:
      if (!Array.isArray(students)) {
        // handle the case where students is not an array
        return students;
      }
      return students.filter(
        ({ studentId }) => studentId !== payload.studentId
      );

    default:
      return students;
  }
}

export default studentReducer;
