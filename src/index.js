import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './routers';

// frame break out
if (window.self === window.top) {
  document.body.style.display = 'block';
} else {
  window.top.location = window.self.location;
}

// for fixing back button in firefox to not cache the dom and return the old page after back button
window.addEventListener('unload', () => {});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
