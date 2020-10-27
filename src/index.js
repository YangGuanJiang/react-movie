import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App'

ReactDOM.render(<App basename={process.env.PUBLIC_URL} />, document.getElementById('root'));
