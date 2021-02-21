import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import EditableInput from '../.';

const App = () => {
  const [valueHover, setValueHover] = React.useState('hover me');
  const [valueClick, setValueClick] = React.useState('click me');
  const [valuedbClick, setValuedbClick] = React.useState('double click me');
  return (
    <div>
      <EditableInput
        style={{ color: 'blue' }}
        editType="hover"
        text={valueHover}
        type="text"
        value={valueHover}
        onChange={v => setValueHover(v)}
      />
      <br />
      <EditableInput
        style={{ color: 'blue' }}
        editType="click"
        type="number"
        text={valueClick}
        value={valueClick}
        onChange={v => setValueClick(v)}
      />
      <br />
      <EditableInput
        style={{ color: 'blue' }}
        editType="dbclick"
        type="textarea"
        text={valuedbClick}
        value={valuedbClick}
        onChange={v => setValuedbClick(v)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
