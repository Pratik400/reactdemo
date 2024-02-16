import {
  CREATE_STUDENT,
  RETRIEVE_STUDENTS,
  UPDATE_STUDENT,
  // DELETE_TUTORIAL,
  // DELETE_ALL_TUTORIALS,
} from "./types";

import StudentDataService from "../services/student.service";

export const createStudent =
  (
    firstName,
    lastName,
    emailAddress,
    contactNo,
    courseCode,
    specialisationCode,
    yearEnrolled,
    nationality,
    userId
  ) =>
  async (dispatch) => {
    try {
      const res = await StudentDataService.create({
        // studentId,
        firstName,
        lastName,
        emailAddress,
        contactNo,
        courseCode,
        specialisationCode,
        yearEnrolled,
        nationality,
        userId,
      });

      dispatch({
        type: CREATE_STUDENT,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveStudents = () => async (dispatch) => {
  try {
    const res = await StudentDataService.getAllStudents();

    dispatch({
      type: RETRIEVE_STUDENTS,
      payload: res.data,
    });

    console.log();
  } catch (err) {
    console.log(err);
  }
};

export const updateStudent = (userId, data) => async (dispatch) => {
  try {
    const res = await StudentDataService.update(userId, data);

    dispatch({
      type: UPDATE_STUDENT,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    console.error("Axios error on the frontend:", err);
    console.error("Request URL:", err.config.url); // Log the request URL
    return Promise.reject(err);
  }
};

// export const deleteTutorial = (id) => async (dispatch) => {
//   try {
//     await TutorialDataService.delete(id);

//     dispatch({
//       type: DELETE_TUTORIAL,
//       payload: { id },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const deleteAllTutorials = () => async (dispatch) => {
//   try {
//     const res = await TutorialDataService.deleteAll();

//     dispatch({
//       type: DELETE_ALL_TUTORIALS,
//       payload: res.data,
//     });

//     return Promise.resolve(res.data);
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

// export const findTutorialsByTitle = (title) => async (dispatch) => {
//   try {
//     const res = await TutorialDataService.findByTitle(title);

//     dispatch({
//       type: RETRIEVE_TUTORIALS,
//       payload: res.data,
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
