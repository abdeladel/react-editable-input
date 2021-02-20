import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EditableInput from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EditableInput text="Hello world!" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
