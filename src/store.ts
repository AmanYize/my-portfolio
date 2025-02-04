import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./features/sidebarSlice";
import darkmodeSlice from "./features/darkmodeSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice,
    darkmode: darkmodeSlice,
  },
});
