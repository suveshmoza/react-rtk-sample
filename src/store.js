import { configureStore } from '@reduxjs/toolkit';
import valueReducer from './valueSlice';

const store = configureStore({
	reducer: valueReducer,
});

export default store;
