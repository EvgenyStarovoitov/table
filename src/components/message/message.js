import React from 'react';
import Type from 'prop-types';
import './message.css';

const Message = ({ ...props }) => (
  <tr className={props.className}>
    <td>
      {props.date}
    </td>
    <td>
      {props.idmsg}
    </td>
    <td>
      {props.status}
    </td>
    <td>
      {props.name}
    </td>
    <td>
      {props.email}
    </td>
    <td>
      {props.phone}
    </td>
    <td>
      {props.destination}
    </td>
    <td>
      {props.more}
    </td>
  </tr>
);

Message.propTypes = {
  date:Type.string,
  idmsg:Type.string,
  status:Type.oneOfType([
    Type.string,
    Type.number
  ]),
  name:Type.string,
  email:Type.string,
  phone:Type.string,
  destination:Type.string,
  more:Type.node,
  className:Type.string
};

Message.defaultProps = {
  className: 'message'
};

export default Message;
