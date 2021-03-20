import * as React from 'react';
import EditableInput from '../.';

const InputNumber = () => {
  const [valueHover, setValueHover] = React.useState(1234);
  const [valueClick, setValueClick] = React.useState(1234);
  const [valuedbClick, setValuedbClick] = React.useState(1234);
  return (
    <section>
      <h3>
        Edit <em>number</em> on hover
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        type="number"
        editType="hover"
        text={valueHover}
        value={valueHover}
        onChange={v => setValueHover(v)}
      />
      <hr />
      <h3>
        Edit <em>number</em> on click
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        type="number"
        editType="click"
        text={valueClick}
        value={valueClick}
        onChange={v => setValueClick(v)}
      />
      <hr />
      <h3>
        Edit <em>number</em> on double click
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        editType="dbclick"
        type="number"
        text={valuedbClick}
        value={valuedbClick}
        onChange={v => setValuedbClick(v)}
      />
      <hr />
    </section>
  );
};

export default InputNumber;
