import $ from 'jquery';
import React from 'react';
import { render } from 'react-dom';
import { App } from './components';

import '../styles/main.scss';

const mount = document.getElementById('app-mount');

$(() => {
  render(<App/>, mount);
  }
)
