import styled from 'styled-components';

export const LinksWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    gap: 24px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
  }
`;
