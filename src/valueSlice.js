import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

const valueSlice = createSlice({
	name: 'value',
	initialState,
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		incrementByValue: (state, action) => {
			state.value += action.payload;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		decrementByValue: (state, action) => {
			state.value -= action.payload;
		},
	},
});

export const { increment, incrementByValue, decrement, decrementByValue } =
	valueSlice.actions;

export default valueSlice.reducer;
