// cd Desktop/Code/ReactCourse/IndecisionApp
// yarn install
// yarn run build
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// babel src/Playground/counter-example.js --out-file=public/scripts/app.js --presets=env,react --watch


import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app')); 


