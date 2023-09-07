import { Navigate } from 'react-router';
import { AdminRouteProps, ProtectedRouteProps } from './PrivateRoute.types';
import React from 'react';

export function PrivateRoute({
	isAuthenticated,
	redirectPath,
	children,
}: ProtectedRouteProps) {
	return isAuthenticated ? (
		children
	) : (
		<Navigate to={{ pathname: redirectPath }} />
	);
}

export function AdminRoute({
	isAuthenticated,
	isAdmin,
	redirectPath,
	children,
}: AdminRouteProps) {
	return isAuthenticated && isAdmin ? (
		children
	) : (
		<Navigate to={{ pathname: redirectPath }} />
	);
}
