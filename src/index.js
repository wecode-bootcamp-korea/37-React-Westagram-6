import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import User from './user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
// root.render(<User />);
