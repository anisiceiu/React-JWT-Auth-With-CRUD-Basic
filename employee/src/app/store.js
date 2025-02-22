import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../features/employeesSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
     auth: authReducer,
     employees: employeesReducer
     }
});