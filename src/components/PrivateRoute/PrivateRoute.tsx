import { Navigate } from 'react-router';
import { ProtectedRouteProps } from './PrivateRoute.types';
import React from 'react';

export default function PrivateRoute({
	isAuthenticated,
	authenticationPath,
	outlet,
}: ProtectedRouteProps) {
	if (isAuthenticated) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: authenticationPath }} />;
	}
}
