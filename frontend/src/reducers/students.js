import {
  CREATE_STUDENT,
  RETRIEVE_STUDENTS,
  UPDATE_STUDENT,
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
    //     if (student.userId === payload.userId) {
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



    default:
      return students;
  }
}

export default studentReducer;
