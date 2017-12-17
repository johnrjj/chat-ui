import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const MessagePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-basis: 32rem;
  border: 1px solid black;
  flex: 1;
`;

const Avatar = () => <MessagePanelContainer />;

export { MessagePanelContainer };
