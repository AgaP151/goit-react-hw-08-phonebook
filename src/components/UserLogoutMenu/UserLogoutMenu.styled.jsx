import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  gap: 16px;
  flex-direction: column-reverse;
  align-items: flex-end;
  justify-content: center;

  @media screen and (min-width: 1280px) {
    gap: 24px;
    flex-direction: row;
  }
`;

export const WelcomeText = styled.div`
  position: absolute;
  width: max-content;
  transform: translate(0%, 220%);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  gap: 8px;

  & > span {
    display: none;
  }

  & > p {
    margin: 0;
    font-size: 12px;
  }

  @media screen and (min-width: 768px) {
    position: static;
    transform: translate(0, 0);
    gap: 16px;
    & > p {
      font-size: 16px;
    }
    & > span {
      display: inline-block;
    }
  }
`;
