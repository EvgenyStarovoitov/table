import React from 'react';
import Type from 'prop-types';
import './heading.css';

const HeadingLevel = {
  xl: 1,
  l: 2,
  m: 3,
  s: 4
};

const Heading = ({ ...props }) => (
  React.createElement(`h${HeadingLevel[props.size]}`, { className:props.className }, [ props.children ])
);

Heading.propTypes = {
  children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
  size:Type.oneOf(['s', 'm', 'l', 'xl']),
  className:Type.string
};

Heading.defaultProps = {
  className: 'heading'
};

export default Heading;
