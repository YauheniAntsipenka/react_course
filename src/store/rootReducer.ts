import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { coursesReducer } from './courses/reducer';
import { userReducer } from './user/reducer';
import { authorsReducer } from './authors/reducer';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	user: userReducer,
	authors: authorsReducer,
});

export const store = configureStore({ reducer: rootReducer });
