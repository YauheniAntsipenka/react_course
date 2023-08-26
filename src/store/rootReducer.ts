import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { coursesReducer } from './courses/reducer';

export const rootReducer = combineReducers({
	courses: coursesReducer,
	//could be extended by another slice of reducer that respond for other part of your app
});

export const store = configureStore({ reducer: rootReducer });
