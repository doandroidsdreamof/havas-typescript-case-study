import { createSlice } from '@reduxjs/toolkit';

//* Navigation bar için responsive toggle state'i //
export const navbarSlice = createSlice({
  name: 'navbar',
  initialState: {
    navbarState: false,
  },
  reducers: {
    navbarToggle: (state) => {
      state.navbarState = !state.navbarState;
    },
  },
});

export default navbarSlice;
