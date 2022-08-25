import React from 'react';
import ReactDOM from 'react-dom';

import './style/style.less';

import { App } from './container/app';

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
