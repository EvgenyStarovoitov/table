import React from 'react';
import Type from 'prop-types';
import './icon.css';

const Icon = ({ ...props }) => (
  <span
    className={`icon ${props.className}`}
  />
);

Icon.propTypes = {
  className:Type.string
};

export default Icon;
