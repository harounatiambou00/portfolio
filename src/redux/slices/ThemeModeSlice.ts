import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeModeType {
  isOnDarkMode: boolean;
}

const initialState: ThemeModeType = {
  isOnDarkMode: false,
};

export const themeModeSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeModeType>) => {
      state.isOnDarkMode = action.payload.isOnDarkMode;
    },
  },
});

export const { setThemeMode } = themeModeSlice.actions;
