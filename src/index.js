import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="503740099223-aufl1dd9v9rdi05hqua6k8o1cr85uiq8.apps.googleusercontent.com">
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </GoogleOAuthProvider>
);
