import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { coursesReducer } from './courses/reducer';
import { userReducer } from './user/reducer';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	user: userReducer,
});

export const store = configureStore({ reducer: rootReducer });
