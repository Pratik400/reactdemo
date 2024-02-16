import {
  CREATE_STUDENT,
  RETRIEVE_STUDENTS,
  UPDATE_STUDENT,
  // DELETE_TUTORIAL,
  // DELETE_ALL_TUTORIALS,
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

    case UPDATE_STUDENT:
      return students.map((student) => {
        if (student.userId === payload.userId) {
          return {
            ...student,
            ...payload,
          };
        } else {
          return student;
        }
      });

    // case UPDATE_STUDENT:
    //   return {
    //     ...students,
    //     students: (students.students || []).map((student) => {
    //       if (student.userId === payload.userId) {
    //         return {
    //           ...student,
    //           ...payload,
    //         };
    //       } else {
    //         return student;
    //       }
    //     }),
    //   };

    // case DELETE_TUTORIAL:
    //   return tutorials.filter(({ id }) => id !== payload.id);

    // case DELETE_ALL_TUTORIALS:
    //   return [];

    default:
      return students;
  }
}

export default studentReducer;