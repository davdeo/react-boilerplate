import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './container/app';

import './style/style.less';

const rootElement = document.querySelector('#root');
ReactDOM.render(<App />, rootElement);
