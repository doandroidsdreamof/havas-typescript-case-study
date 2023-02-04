import { combineReducers } from '@reduxjs/toolkit';
import requestInit from './requestSlice';
import navbarSlice from './navbarSlice';


export const { requestInitToggle,requestRemove } = requestInit.actions;
export const { navbarToggle } = navbarSlice.actions;




export default combineReducers({
  requestInitSlice: requestInit.reducer,
  navbarSlice: navbarSlice.reducer,


});
