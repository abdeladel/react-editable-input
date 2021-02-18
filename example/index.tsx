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
        type="text"
      />
      <br />
      <EditableInput
        style={{ color: 'red' }}
        editType="click"
        text="click me"
        type="number"
      />
      <br />
      <EditableInput
        style={{ color: 'red' }}
        editType="dbclick"
        text="double click me"
        type="textarea"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
