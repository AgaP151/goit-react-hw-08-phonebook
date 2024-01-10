import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  color: #010101;

  @media screen and (min-width: 768px) {
    padding: 0 42px;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 62px;
  }
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubHeader = styled.h2`
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
