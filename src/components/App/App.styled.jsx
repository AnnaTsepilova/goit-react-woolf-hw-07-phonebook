import styled from 'styled-components';

export const PhonePageWrapper = styled.main`
  min-height: 100vh;
  min-width: 320px;
  width: 100%;

  margin: 0 auto;
  padding: 0 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: 500px;
  margin: 58px auto;

  background-color: #fcfcfc;

  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  border-radius: 8px;
`;

export const Title = styled.h1`
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 32px;
  font-weight: 700;
  text-align: center;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
