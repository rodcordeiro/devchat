import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DefaultTheme } from 'styled-components';

import { dark } from '@/styles/dark';

const theme = createSlice({
  name: 'theme',
  initialState: { theme: dark, isDarkMode: true },
  reducers: {
    alterTheme: (state, action: PayloadAction<DefaultTheme>) => {
      state.theme = action.payload;
      state.isDarkMode = action.payload.title === 'dark';
    },
  },
});

export default theme.reducer;
export const { alterTheme } = theme.actions;
