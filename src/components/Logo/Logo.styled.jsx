import styled from 'styled-components';

export const Container = styled.span`
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-size: 18px;
  letter-spacing: 0.05em;
  flex-grow: 1;

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;
