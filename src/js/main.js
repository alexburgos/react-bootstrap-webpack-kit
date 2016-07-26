import React from 'react';
import { render } from 'react-dom';
import { App } from './components';

import '../styles/main.scss';

render(<App/>, document.querySelector("#react-mount"));
