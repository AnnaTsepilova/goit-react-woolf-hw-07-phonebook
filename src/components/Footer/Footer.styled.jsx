import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';

export const FooterContainer = styled.footer`
  width: 100%;
  min-height: 64px;
  border-top: 1px solid #eebf31;
  background-color: rgba(32, 32, 37, 0.541);
`;

export const FooterDataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;

  width: 100%;
`;
export const FooterDataText = styled.p`
  margin-right: 10px;
  font: inherit;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;

  text-align: center;
  color: #fcfcfc;
`;

export const FooterIcon = styled(BsGithub)`
  margin-left: 5px;
  color: #eebf31;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 0 13px 3px #eebf31;
    transform: scale(1.3);
  }
`;
