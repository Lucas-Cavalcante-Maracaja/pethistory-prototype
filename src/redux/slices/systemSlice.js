import { createSlice } from '@reduxjs/toolkit';

export const systemSlice = createSlice({
	name: 'system',
	initialState: 
		{ isMobile: false },
	reducers: {
		setIsMobile: (state, action) => {
			state.isMobile = action.payload.isMobile;
		},

	},
});


export const { setIsMobile } = systemSlice.actions;

export default systemSlice.reducer;