import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EditableInput from '../.';

const App = () => {
  return (
    <div>
      <EditableInput
        style={{ color: 'red' }}
        editType="hover"
        text="hover me"
      />
      <br />
      <EditableInput
        style={{ color: 'red' }}
        editType="click"
        text="click me"
      />
      <br />
      <EditableInput
        style={{ color: 'red' }}
        editType="dbclick"
        text="double click me"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
