export type Type =
  | 'text'
  | 'number'
  | 'password'
  | 'email'
  | 'textarea'
  | 'select'
  | 'multiSelect'
  | 'date'
  | 'checkbox'
  | 'radio'
  | 'switcher'
  | 'color';

export type Value = string | number;

export type EditableInputProps = {
  /**
   * If true it will be editable
   *
   * @type {boolean}
   */
  editable: boolean;

  /**
   * Text to be displayed
   *
   * @type {string}
   */
  text: string;

  /**
   * Value of the input
   *
   * @type {(string | number)}
   */
  value?: Value;

  /**
   * Type of the input to be edited in
   *
   * @type {("string" | "number" | "textarea" | "select" | "multiSelect" | "date" | "color")}
   */
  type?: Type;

  /**
   * Function run when the input changes
   *
   */
  onChange?: Function;

  /**
   * Indicates how to open the edit component
   *
   * @type {("dbclick" | "click" | "hover")}
   */
  editType?: 'dbclick' | 'click' | 'hover';

  /**
   * Indicates how to edit the label
   *
   * @type {("inline" | "modal" | "drawer")}
   */
  editIn?: 'inline' | 'modal' | 'drawer';

  /**
   * Custom css attributes styling for the button
   *
   * @type {React.CSSProperties}
   */
  style?: React.CSSProperties;
};

export type EditIconProps = {
  isVisible: boolean;
  onIconClicked: Function;
};
