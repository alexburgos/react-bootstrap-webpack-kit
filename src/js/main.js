import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './components/App';
import '../styles/main.scss';


injectTapEventPlugin();
render(<App/>, document.querySelector("#react-mount"));
