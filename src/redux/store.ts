import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import isAllowReducer from "./isAllowSlice/isAllowSlice";
import isApplicateReducer from "./isApplicateSlice/isApplicateSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  isAllow: isAllowReducer,
  isApplicate: isApplicateReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["isAllow", "isApplicate"],
};

const persistedReduver = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReduver,
});

export default store;
