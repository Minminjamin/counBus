import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import isAllowReducer from "./isAllowSlice/isAllowSlice";
import isApplicateSlice from "./isApplicateSlice/isApplicateSlice";

export const store = configureStore({
  reducer: {
    isAllow: isAllowReducer,
    isApplicate: isApplicateSlice,
  },
});
