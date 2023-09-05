export interface ProtectedRouteProps {
	isAuthenticated: boolean;
	redirectPath: string;
	children: JSX.Element;
}

export interface AdminRouteProps extends ProtectedRouteProps {
	isAdmin: boolean;
}
