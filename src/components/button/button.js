import React from 'react';
import Type from 'prop-types';
import './button.css';

const Button = ({ ...props }) => (
  <button
    className='button'
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
  onClick:Type.func
};

export default Button;
