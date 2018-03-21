import React from 'react';
import Type from 'prop-types';
import './button.css';

const Button = ({ ...props }) => (
  <button
    className={props.className}
    onClick={props.onClick}
  >
    {props.textButton}
  </button>
);

Button.propTypes = {
  textButton: Type.oneOfType([
    Type.string,
    Type.node
  ]),
  onClick:Type.func,
  className:Type.string
};

Button.defaultProps = {
  className:'button'
};

export default Button;
