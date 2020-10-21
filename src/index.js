import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HamburgerMenue from './components/Semantic/HamburgerMenue';



ReactDOM.render(
  <React.StrictMode>

    <HamburgerMenue />
   
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
