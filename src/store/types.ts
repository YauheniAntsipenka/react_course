import { AuthorType } from './authors/types';
import { CourseType } from './courses/types';
import { UserState } from './user/types';

export type State = {
	user: UserState;
	courses: CourseType[];
	authors: AuthorType[];
};
