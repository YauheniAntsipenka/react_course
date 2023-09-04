import { Navigate } from 'react-router';
import { AdminRouteProps, ProtectedRouteProps } from './PrivateRoute.types';
import React from 'react';

export function PrivateRoute({
	isAuthenticated,
	redirectPath,
	outlet,
}: ProtectedRouteProps) {
	if (isAuthenticated) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: redirectPath }} />;
	}
}

export function AdminRoute({
	isAuthenticated,
	isAdmin,
	redirectPath,
	outlet,
}: AdminRouteProps) {
	if (isAuthenticated && isAdmin) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: redirectPath }} />;
	}
}
