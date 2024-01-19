import styled from 'styled-components';

export const PhoneLink = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus {
    color: rgba(0, 128, 75, 0.7);
  }

  & > span {
    font-weight: normal;
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;

  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  & > img {
    border-radius: 50%;
    width: 80px;
  }
`;
export const ListItem = styled.li`
  width: 90%;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  padding: 16px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.1);
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 20px;
    flex-direction: row;
    width: 100%;
  }
`;

export const ListItemData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 16px;
  margin: 16px;
  border-radius: 12px;
  padding: 8px 12px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
    padding: 32px;
    font-size: 20px;
    margin: 0 36px;
    padding: 12px 18px;
    max-width: 50vw;
  }
`;

export const DataWrapper = styled.div`
  & > span {
    font-weight: normal;
  }
`;
