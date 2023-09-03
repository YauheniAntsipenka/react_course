import { AuthorsAction } from './actions';
import { AuthorType, AuthorsActionTypes } from './types';

export let initAuthorsState = [] as AuthorType[];

export function authorsReducer(
	state = initAuthorsState,
	action: AuthorsAction
) {
	switch (action.type) {
		case AuthorsActionTypes.ADD_AUTHOR:
			return action.authors;

		case AuthorsActionTypes.DELETE_AUTHOR:
			return action.authors;

		case AuthorsActionTypes.GET_ALL_AUTHORS:
			return action.authors;

		default:
			return state;
	}
}
