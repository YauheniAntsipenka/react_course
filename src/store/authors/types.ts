export const enum AuthorsActionTypes {
	ADD_AUTHOR = 'ADD_AUTHOR',
	DELETE_AUTHOR = 'DELETE_AUTHOR',
	GET_ALL_AUTHORS = 'GET_ALL_AUTHORS',
}

export type AuthorType = {
	name: string;
	id: string;
};
