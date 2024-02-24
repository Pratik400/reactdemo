import { configureStore } from '@reduxjs/toolkit'
import studentReducer from "./slices/students";

const reducer = {
  students: studentReducer
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;