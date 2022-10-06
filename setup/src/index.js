import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css";

// Where the application starts
// Render the content we pass on App at a certain element

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

