import React from 'react';
import Type from 'prop-types';
import './icon-button.css';
import Button from '../button/button';

const IconButton = ({ ...props }) => (
  <Button
    className={`button ${props.className}`}
    textButton={props.children}
    onClick={props.onClick}
  />
);

IconButton.propTypes = {
  children:Type.node,
  className:Type.string,
  onClick:Type.func
};

IconButton.defaultProps = {
  className:'icon-button'
};

export default IconButton;

