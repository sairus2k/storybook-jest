import React from 'react';
import ReactDOM from 'react-dom';
import {SwitchButton} from './SwitchButton';

it('SwitchButton renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SwitchButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
