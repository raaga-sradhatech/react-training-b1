import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../Store/Reducer';
const store = configureStore({
    reducer: {
      counter: counterSlice.reducer
    }
  });

  export default store;
  