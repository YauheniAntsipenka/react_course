export interface ProtectedRouteProps {
	isAuthenticated: boolean;
	redirectPath: string;
	outlet: JSX.Element;
}

export interface AdminRouteProps extends ProtectedRouteProps {
	isAdmin: boolean;
}
