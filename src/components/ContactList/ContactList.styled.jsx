import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  position: relative;
  padding-left: 0;
  margin-top: 32px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-right: 15px;    
  }
  @media screen and (min-width: 1280px) {
    max-width: 35vw;
    width: auto;
    left: 0;
  }
`;
