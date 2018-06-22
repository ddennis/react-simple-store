import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import registerServiceWorker from './registerServiceWorker';


import DenuxApp from "./denux-example/DenuxApp";
import ContextApp from "./context-example/ContextApp";
import DispatcherApp from "./dispatcher-example/DispatcherApp";
import App from "./App";


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
