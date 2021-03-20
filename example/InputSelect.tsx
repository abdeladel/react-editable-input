import * as React from 'react';
import EditableInput from '../.';

const InputSelect = () => {
  const [valueHover, setValueHover] = React.useState(1);
  const [valueClick, setValueClick] = React.useState(2);
  const [valuedbClick, setValuedbClick] = React.useState(3);
  const options = [
    { label: 'option1', value: 1 },
    { label: 'option2', value: 2 },
    { label: 'option3', value: 3 },
  ];
  const displayText = v => options.find(o => o.value === v).label;
  return (
    <section>
      <h3>
        Edit <em>select</em> on hover
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        type="select"
        editType="hover"
        text={displayText(valueHover)}
        value={valueHover}
        onChange={v => setValueHover(v)}
        list={options}
        emptyOption={true}
      />
      <hr />
      <h3>
        Edit <em>select</em> on click
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        type="select"
        editType="click"
        text={displayText(valueClick)}
        value={valueClick}
        onChange={v => setValueClick(v)}
        list={options}
        emptyOption={true}
      />
      <hr />
      <h3>
        Edit <em>select</em> on double click
      </h3>
      <EditableInput
        style={{ color: 'blue' }}
        editType="dbclick"
        type="select"
        text={displayText(valuedbClick)}
        value={valuedbClick}
        onChange={v => setValuedbClick(v)}
        list={options}
        emptyOption={true}
      />
      <hr />
    </section>
  );
};

export default InputSelect;
