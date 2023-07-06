import React, { Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { PAGES } from './routes';
import './bootstrap';
import '../css/app.css';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render React Pages
const root = createRoot(document.getElementById('app'));
root.render(PAGES.map((item, index) => <Fragment key={index}>{item.component}</Fragment>));
