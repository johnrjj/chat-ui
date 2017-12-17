import React from 'react';
import styled from 'styled-components';
import { colors } from '../colors';
import { Search } from 'react-feather';


const MessagesPanelContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-basis: 28rem;
`;

const MessagesPanelTitle = styled.h1`
font-size: 1.5rem;
color: ${colors.lightBlack};
margin: 2rem 1rem 2rem 2rem;

`;

const MessagesSearch = styled.div`
  color: ${colors.lightestGray};
  font-size: 1rem;
  margin: 0 0 1rem 2rem;
  opacity: 0.5;
`;

const MessagesHorizontalLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${colors.lightestGray};
  opacity: 0.5;
  padding: 0; 
  margin: 0 0 2rem 2rem;
`;

const MessagesContainer = styled.div`

`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 2rem;  
`;

const AvatarContainer = styled.div`
  width: 4rem;
  height: 4rem;
  position: relative;
`;

const AvatarImg = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
`;

const AvatarStatus = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20%;
  height: 20%;
  background-color: ${colors.green};
  z-index: 1;
  border-radius: 100%;
  border: 1px solid ${colors.white};
`;

const MessageContentContainer = styled.div`
  flex: 1;
`;

const MessageContentHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 4rem;
  margin-left: 1.5rem;  
`;

const MessageContentTitle = styled.div`
  color: ${colors.lightBlack};
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 700;
`;

const MessageContentSubtitle = styled.div`
  color: ${colors.lightestGray};
  font-size: 1rem;
`;

const MessageNotificationsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 4rem;
margin-right: 2rem;
`;

const MessageNotifications = styled.div`
width: 2rem;
height: 2rem;
border-radius: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${colors.red};
color: ${colors.white};
`;


//todo, work on this, sloppy right now
const MessagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 3rem;
  width: 100%;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 1.5rem;  
  line-height: 1.5rem;
`;


const MessagesPanel = () => (
<MessagesPanelContainer>
  <MessagesPanelTitle>Messages</MessagesPanelTitle>
  <MessagesSearch><Search size={20}/></MessagesSearch>
  <MessagesHorizontalLine/>
  <MessagesContainer>
    <MessageContainer>
      <AvatarContainer>
        <AvatarImg src={'https://randomuser.me/api/portraits/men/1.jpg'}/>
        <AvatarStatus/>
      </AvatarContainer>
      <MessageContentContainer>
        <MessageContentHeaderContainer>
          <MessageContentTitle>Andrea Smith</MessageContentTitle>
          <MessageContentSubtitle>Senior Mentor</MessageContentSubtitle>
        </MessageContentHeaderContainer>
        <MessagePreviewContainer>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo risus, efficitur ut nisl in, bibendum elementum lacus. Mauris sed nunc maximus, hendrerit velit ac, tempor erat. Vivamus 
          </MessagePreviewContainer>
      </MessageContentContainer>
      <MessageNotificationsContainer>
        <MessageNotifications>6</MessageNotifications>
      </MessageNotificationsContainer>
    </MessageContainer>
  </MessagesContainer>
  </MessagesPanelContainer>
)

export { 
  MessagesPanel,
};