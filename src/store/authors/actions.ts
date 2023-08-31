import { AuthorType, AuthorsActionTypes } from './types';

interface AddAuthor {
	type: AuthorsActionTypes.ADD_AUTHOR;
	authors: AuthorType[];
}

interface DeleteAuthor {
	type: AuthorsActionTypes.DELETE_AUTHOR;
	authors: AuthorType[];
}

interface GetAllAuthors {
	type: AuthorsActionTypes.GET_ALL_AUTHORS;
	authors: AuthorType[];
}

export type AuthorsAction = AddAuthor | DeleteAuthor | GetAllAuthors;
