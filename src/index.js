import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import App from './App.tsx';
import { Login } from './components/Login/Login.tsx';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</React.StrictMode>
	</BrowserRouter>
);
