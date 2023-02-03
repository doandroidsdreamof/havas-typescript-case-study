import { createSlice, combineReducers } from '@reduxjs/toolkit';

//* Card component'i buttonunun state'i //
export const requestInit = createSlice({
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

export const { requestInitToggle } = requestInit.actions;
export default combineReducers({
  requestInitSlice: requestInit.reducer,
});
