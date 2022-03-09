import { configureStore } from '@reduxjs/toolkit';
import systemReducer from './slices/systemSlice'
import userSlice from './slices/userSlice'
export default configureStore({
	reducer: {
        system: systemReducer,
        user: userSlice
    },
});