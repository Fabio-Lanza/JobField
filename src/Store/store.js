import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../Feature/User/userSlice";
import jobSlice from './../Feature/Job/JobSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
