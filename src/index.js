import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App.tsx';
import { Login } from './components/Login/Login.tsx';
import { Registration } from './components/Registration/Registration.tsx';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Routes>
				<Route path='/courses' element={<App />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Registration />} />
				<Route path='/' element={<Navigate to='/login' replace={true} />} />
			</Routes>
		</React.StrictMode>
	</BrowserRouter>
);
