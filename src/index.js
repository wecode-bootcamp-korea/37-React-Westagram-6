import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import './styles/reset.scss';
import './styles/common.scss';
import '../src/Pages/Gaeul/Main/Main.scss';
import '../src/Pages/Gaeul/Login/Login.scss';
import '../src/components/Nav/Nav.scss';
import '../src/Pages/Gaeul/Component/Feeds.scss';
import '../src/Pages/Gaeul/Component/StoryUser.scss';
import '../src/Pages/Gaeul/Component/RecommendUser.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
