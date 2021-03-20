import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';

const App = () => {
  const [valueHover, setValueHover] = React.useState('hover me');
  const [valueClick, setValueClick] = React.useState('click me');
  const [valuedbClick, setValuedbClick] = React.useState('double click me');
  return (
    <div>
      <InputText />
      <InputNumber />
      <InputSelect />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
