import { createSlice, combineReducers } from '@reduxjs/toolkit';

//* Post component (homePage) buttonunun state'i //
 const requestInit = createSlice({
  name: 'requestState',
  initialState: {
    requestState: false,
  },
  reducers: {
    requestInitToggle: (state) => {
      state.requestState = !state.requestState;
    },
  },
});



export default requestInit