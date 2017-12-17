import React from 'react';
import styled from 'styled-components';
import { Paperclip } from 'react-feather';

import { colors } from '../colors';

const MessagePanelContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex-basis: 32rem;
  flex: 1;
  background-color: #f5f6f8;
`;

const AvatarContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
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

const MessagePanelHeaderContainer = styled.div`
  display: flex;
  margin: 1rem 1.5rem;
  align-items: center;
`;

const MessagePanelContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
`;

const MessagesHorizontalLine = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${colors.lightestGray};
  opacity: 0.5;
  padding: 0;
  margin: 0 0 1rem 1rem;
`;

const MessageInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  padding: 1.5rem;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.fromCurrentUser ? 'row' : 'row-reverse')};
  align-items: flex-end;
  margin-bottom: 1rem;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${props => (props.fromCurrentUser ? colors.white : colors.blue)};
  padding: 1rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: ${props => (props.fromCurrentUser ? '10px 10px 10px 0px' : '10px 10px 0px 10px')};
  max-width: 60%;
  width: auto;
`;

const MessageTitle = styled.div`
  color: ${props => (props.fromCurrentUser ? colors.lightBlack : colors.white)};
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
`;

const MessageContent = styled.div`
  color: ${props => (props.fromCurrentUser ? colors.darkGray : colors.white)};
  line-height: 1rem;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const MessageTimestamp = styled.div`
  align-self: flex-end;
  font-size: 0.8rem;
  color: ${props => (props.fromCurrentUser ? colors.lightestGray : colors.white)};
`;

const HeaderSubtitle = styled.div`
  color: ${colors.darkGray};
  line-height: 1rem;
  font-size: 0.9rem;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
`;

const HeaderTitle = styled.div`
  color: ${colors.lightBlack};
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 700;
  margin-left: 1rem;
`;

const MessageInputText = styled.p`
  margin-left: 1rem;
  color: ${colors.gray};
`;

const MessagePanel = () => (
  <MessagePanelContainer>
    <MessagePanelHeaderContainer>
      <AvatarContainer>
        <AvatarImg src={'https://randomuser.me/api/portraits/women/2.jpg'} />
        <AvatarStatus />
      </AvatarContainer>
      <HeaderTitle>Sally Mae</HeaderTitle>
      <HeaderSubtitle>Senior Mentor</HeaderSubtitle>
    </MessagePanelHeaderContainer>
    <MessagesHorizontalLine />
    <MessagePanelContentContainer>
      <MessageContainer fromCurrentUser>
        <AvatarContainer>
          <AvatarImg src={'https://randomuser.me/api/portraits/men/2.jpg'} />
          <AvatarStatus />
        </AvatarContainer>
        <Message fromCurrentUser>
          <MessageTitle fromCurrentUser>John Johnson</MessageTitle>
          <MessageContent fromCurrentUser>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo risus, efficitur ut
            nisl in, bibendum elementum lacus. Mauris sed nunc maximus, hendrerit velit ac, tempor
            erat. Vivamus consequat ultricies tellus, ac iaculis diam varius ut. Proin nec aliquet
            velit, quis sagittis lacus. Cras sed libero tellus. Mauris dui quam, luctus eleifend
            accumsan id, ultricies eu leo. Vestibulum auctor porttitor nibh, nec iaculis augue.
            Integer luctus aliquet odio, sed varius risus hendrerit in. Don
          </MessageContent>
          <MessageTimestamp fromCurrentUser>5 min ago</MessageTimestamp>
        </Message>
      </MessageContainer>

      <MessageContainer>
        <AvatarContainer>
          <AvatarImg src={'https://randomuser.me/api/portraits/women/2.jpg'} />
          <AvatarStatus />
        </AvatarContainer>
        <Message>
          <MessageTitle>Sally Mae</MessageTitle>
          <MessageContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed leo risus, efficitur ut
            nisl in, bibendum elementum lacus. Mauris sed nunc maximus, hendrerit velit ac, tempor
            erat. Vivamus consequat ultricies tellus, ac iaculis diam varius ut. Proin nec aliquet
            velit, quis sagittis lacus. Cras sed libero tellus. Mauris dui quam, luctus eleifend
            accumsan id, ultricies eu leo. Vestibulum auctor porttitor nibh, nec iaculis augue.
            Integer luctus aliquet odio, sed varius risus hendrerit in. Don
          </MessageContent>
          <MessageTimestamp>5 min ago</MessageTimestamp>
        </Message>
      </MessageContainer>

      <MessageContainer>
        <AvatarContainer>
          <AvatarImg src={'https://randomuser.me/api/portraits/women/2.jpg'} />
          <AvatarStatus />
        </AvatarContainer>
        <Message>
          <MessageTitle>Sally Mae</MessageTitle>
          <MessageContent>Hello, are you there? </MessageContent>
          <MessageTimestamp>3 min ago</MessageTimestamp>
        </Message>
      </MessageContainer>

      <MessageContainer>
        <AvatarContainer>
          <AvatarImg src={'https://randomuser.me/api/portraits/women/2.jpg'} />
          <AvatarStatus />
        </AvatarContainer>
        <Message>
          <MessageTitle>Sally Mae</MessageTitle>
          <MessageContent>John, you never answer your texts </MessageContent>
          <MessageTimestamp>1 min ago</MessageTimestamp>
        </Message>
      </MessageContainer>
    </MessagePanelContentContainer>
    <MessageInputContainer>
      <Paperclip color={colors.lightestGray} />
      <MessageInputText>Write text here</MessageInputText>
    </MessageInputContainer>
  </MessagePanelContainer>
);

export { MessagePanel };
