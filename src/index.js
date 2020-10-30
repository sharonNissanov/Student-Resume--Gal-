import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HamburgerMenue from './components/HamburgerMenue';
import BottomMenue from './components/BottomMenue'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <BottomMenue/>
    <HamburgerMenue/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
