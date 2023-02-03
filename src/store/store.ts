import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/requestSlice';

/*
 * Her ne kadar bu proje için state management fazla olabilsede
 * ölçeklenebilirlik açısından kullandım
*/

export const store = configureStore({
  reducer: {
    requestStore: reducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
