import { createSlice } from "@reduxjs/toolkit";

export interface DarkmodeState {
  isDarkMode: boolean;
}

const initialState: DarkmodeState = {
  isDarkMode: false,
};

const darkmodeSlice = createSlice({
  name: "darkmode",
  initialState,
  reducers: {
    toggleDarkmode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleDarkmode } = darkmodeSlice.actions;

export default darkmodeSlice.reducer;
