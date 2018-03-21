import React from 'react';
import Type from 'prop-types';
import './messageList.css';

import Message from '../message/message.js';
import Button from '../button/button';

const MessageList = ({ ...props }) => (
  <table className='messageList'>
    <tbody>
      <Message
        date='Дата'
        idmsg='Id'
        status='Статус'
        name='ФИО'
        email='Email'
        phone='Телефон'
        destination='К кому обращение'
        more='Подробнее'
      />
      {
        props.items.map((e, i) =>
          (
            <Message
              key={i}
              date={e.date}
              idmsg={e.idmsg}
              status={e.status}
              name={e.name}
              email={e.email}
              phone={e.phone}
              destination={e.destination}
              more={
                <Button
                  textButton='...'
                  onClick={props.onClick}
                />
              }
            />
          )
        )
      }
    </tbody>
  </table>
);

MessageList.propTypes = {
  items: Type.array,
  onClick:Type.func
};

export default MessageList;
