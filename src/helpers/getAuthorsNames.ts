import { mockedAuthorsList } from '../constants';

export function getAuthors(authorsIds: string[]): string[] {
	return authorsIds.map(
		(authorId) =>
			mockedAuthorsList.find((author) => author.id === authorId)?.name!
	);
}
