import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState:
	{
		name: "",
		type: ""
	},
	reducers: {
		setUser: (state, action) => {
			state.name = action.payload.name;
			state.type = action.payload.type;
		},

	},
});


export const { setUser } = userSlice.actions;

export default userSlice.reducer;