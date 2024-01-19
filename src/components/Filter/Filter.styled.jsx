import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  font-size: 40px;
  color: #010101;
  justify-content: end;
  padding: 32px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.2);
  border: 2px solid blanchedalmond;
  box-shadow: 10px 12px 12px 0px #cab1b14d;
  object-fit: fill;

  @media screen and (min-width: 768px) {
    max-width: 40vw;
    margin-right: 15px;
    min-width: 15vw;
  }
  @media screen and (min-width: 1280px) {
    min-width: 35vw;
  }
`;
