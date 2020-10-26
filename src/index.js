import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HamburgerMenue from './components/Semantic/HamburgerMenue';
import BottomMenue from './components/Semantic/BottomMenue'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
   <BottomMenue/><App/>
   <HamburgerMenue/>
   
    
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
