import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
  z-index: 10000;

  @media screen and (min-width: 320px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Header = styled.header`
  padding: 24px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 10000;

  @media screen and (min-width: 320px) {
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }

  @media screen and (min-width: 1280px) {
    padding: 24px 42px;
    height: 60px;
  }
`;
