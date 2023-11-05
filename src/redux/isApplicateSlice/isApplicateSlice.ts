import { createSlice } from "@reduxjs/toolkit";

interface isApplicateState {
  value: boolean;
}

const initialState = { value: false } as isApplicateState;

const isApplicateSlice = createSlice({
  name: "isApplicate",
  initialState,
  reducers: {
    isApplicate(state) {
      state.value = true;
    },
    isNotApplicate(state) {
      state.value = false;
    },
  },
});

export const { isApplicate, isNotApplicate } = isApplicateSlice.actions;
export default isApplicateSlice.reducer;
