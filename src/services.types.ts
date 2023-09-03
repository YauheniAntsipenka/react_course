export type ObjectsJSONResponse<T> = {
	successful: boolean;
	result?: T[];
};

export type SingleItemJSONResponse<T> = {
	successful: boolean;
	result?: T;
};

export type IsSuccessfullJSONResponse = {
	successful: boolean;
};

type UserLoginInfo = {
	email: string;
	name: string;
};

export type UserRelatedJSONResponse = {
	successful: boolean;
	result?: string;
	user: UserLoginInfo;
};
