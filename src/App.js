import React, { Component } from 'react';
// import logo from './logo.svg';
import { Camera } from 'react-feather';
import { SideNav } from './components/SideNav';
import { MessagesPanel } from './components/MessagesPanel';
import { MessagePanelContainer } from './components/MessagePanel';

import styled from 'styled-components';

const FullScreenAppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex: 1;
`;

class App extends Component {
  render() {
    return (
      <FullScreenAppContainer>
        <SideNav />
        <MessagesPanel />
        <MessagePanelContainer />
      </FullScreenAppContainer>
    );
  }
}

export default App;
