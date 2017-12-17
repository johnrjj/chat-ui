import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const MessagePanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-basis: 32rem;
  flex: 1;
  background-color: #f5f6f8;
`;

const Avatar = () => <MessagePanelContainer />;

export { MessagePanelContainer };
