import React from 'react';
// import Type from 'prop-types';

import './App.css';
import Button from './button/button.js';
import MessageList from './messageList/messageList';
import Heading from './heading/heading';

const data = [
  {
    date: '01/12/1991',
    idmsg: '11jk1h3',
    status: 2,
    name: 'Somebody',
    email: 'servolux@mail.ru',
    phone: '+1111111',
    destination: 'Кадры'
  },
  {
    date: '17/11/1991',
    idmsg: '11131h3',
    status: 1,
    name: 'Отьявленный негодяй',
    email: 'mor4e@mail.ru',
    phone: '+99999999',
    destination: 'СБ'
  }
];

export default class App extends React.Component {
  static propTypes = {
  };

  state = {
    isFilter: false
  };

  handleCheck = () => {
    this.setState({ isFilter:!this.state.isFilter });
  };

  handleMoreLick = (event) => {
    console.log(event.target);
  };

  render() {
    return (
      <div className='App'>
        <Heading size='l'>Список сообщений</Heading>
        <Button
          textButton='Новые'
          onClick={this.handleCheck}
        />
        <MessageList
          items={data}
          onClick={this.handleMoreLick}
        />
      </div>
    );
  }
}
