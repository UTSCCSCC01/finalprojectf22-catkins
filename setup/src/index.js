import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Where the application starts
// Render the content we pass on App at a certain element

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
