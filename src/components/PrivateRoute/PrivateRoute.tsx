import { Navigate } from 'react-router';
import { AdminRouteProps, ProtectedRouteProps } from './PrivateRoute.types';
import React from 'react';

export function PrivateRoute({
	isAuthenticated,
	redirectPath,
	children,
}: ProtectedRouteProps) {
	if (isAuthenticated) {
		return children;
	} else {
		return <Navigate to={{ pathname: redirectPath }} />;
	}
}

export function AdminRoute({
	isAuthenticated,
	isAdmin,
	redirectPath,
	children,
}: AdminRouteProps) {
	if (isAuthenticated && isAdmin) {
		return children;
	} else {
		return <Navigate to={{ pathname: redirectPath }} />;
	}
}
