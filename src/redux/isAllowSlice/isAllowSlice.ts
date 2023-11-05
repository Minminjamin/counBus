import { createSlice } from "@reduxjs/toolkit";
interface isAllowState {
  value: boolean;
}

const initialState = { value: false } as isAllowState;

const isAllowSlice = createSlice({
  name: "isAllow",
  initialState,
  reducers: {
    isAllow(state) {
      state.value = true;
    },
    isNotAllow(state) {
      state.value = false;
    },
  },
});

export const { isAllow, isNotAllow } = isAllowSlice.actions;
export default isAllowSlice.reducer;
