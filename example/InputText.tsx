import * as React from 'react';
import EditableInput from '../.';

const InputText = () => {
  const [valueHover, setValueHover] = React.useState('hover me');
  const [valueClick, setValueClick] = React.useState('click me');
  const [valuedbClick, setValuedbClick] = React.useState('double click me');
  return (
    <section>
      <h3>
        Edit <em>text</em> on hover
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        type="text"
        editType="hover"
        text={valueHover}
        value={valueHover}
        onChange={v => setValueHover(v)}
      />
      <hr />
      <h3>
        Edit <em>text</em> on click
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        type="text"
        editType="click"
        text={valueClick}
        value={valueClick}
        onChange={v => setValueClick(v)}
      />
      <hr />
      <h3>
        Edit <em>text</em> on double click
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        editType="dbclick"
        type="text"
        text={valuedbClick}
        value={valuedbClick}
        onChange={v => setValuedbClick(v)}
      />
      <hr />
    </section>
  );
};

export default InputText;
