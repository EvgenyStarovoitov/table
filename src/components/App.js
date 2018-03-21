import React from 'react';
// import Type from 'prop-types';
import './App.css';

import Button from './button/button.js';
import MessageList from './messageList/messageList';
import Heading from './heading/heading';
import IconButton from './icon-button/icon-button';
import { IconUi } from './icon/index.js';
import data from './data';

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
        <IconButton
          onClick={this.handleMoreLick}
        >
          <IconUi type='left' />
        </IconButton>
        <IconButton
          onClick={this.handleMoreLick}
        >
          <IconUi type='right' />
        </IconButton>
      </div>
    );
  }
}
