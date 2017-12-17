import React, { Component } from 'react';
import styled from 'styled-components';
import { SideNav } from './components/SideNav';
import { MessagesPanel } from './components/MessagesPanel';
import { MessagePanel } from './components/MessagePanel';

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
        <MessagePanel />
      </FullScreenAppContainer>
    );
  }
}

export default App;
