import React from 'react';
import ReactDOM from 'react-dom';
import "purecss";
import './main.css';
import './test';

// import DocumentPage from './CCPDocuments/DocumentPage';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<DocumentPage />, document.getElementById('root'));
// registerServiceWorker();
import component from "./testComponent";

document.body.appendChild(component());
