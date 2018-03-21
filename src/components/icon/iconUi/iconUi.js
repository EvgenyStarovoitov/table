import React from 'react';
import Type from 'prop-types';
import './iconUi.css';
import Icon from '../icon.js';

const IconUi = ({ ...props }) => (
  <Icon
    className={`icon-${props.type}`}
  />
);

IconUi.propTypes = {
  type:Type.oneOf(['left', 'right'])
};

export default IconUi;
