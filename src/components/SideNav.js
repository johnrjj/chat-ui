import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-basis: 4rem;
  background-color: ${colors.green};
`;

const SideNav = () => (
  <SideNavContainer/>
)

export { 
  SideNav,
};