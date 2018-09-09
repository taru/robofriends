import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

// robots destructured because the robots.js file does not export default (just one thing). if it were default, you wouldn't need destructuring. while robots.js only has robots object, if it also had cats object we'd just call both by doing { robots, cats }

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

