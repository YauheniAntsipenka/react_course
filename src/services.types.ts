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
