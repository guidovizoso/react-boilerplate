import React from 'react';
import { render } from 'react-dom';

const title = 'Minimal React setup';

render(
  <div>{title}</div>,
  document.getElementById('app')
);