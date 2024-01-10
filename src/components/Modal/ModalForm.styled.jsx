import styled from 'styled-components';

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AvatarWrapper = styled.div`
  border-radius: 50%;
  padding: 3px;

  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  & > img {
    border-radius: 50%;
    width: 150px;
  }
`;

export const ListItem = styled.div`
  max-width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 16px;
  padding: 32px;
  border-radius: 12px;
  background-color: hsla(215, 98%, 79%, 0.2);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
    max-width: fit-content;
  }
`;

export const ContentWrapper = styled.div`
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    padding: 32px;
  }
`;

export const ListItemForm = styled.form`
  font-size: 14px;
  color: #010101;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  border-radius: 12px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  padding: 8px 12px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  font-weight: bold;
  font-size: 14px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    flex-direction: row;
  }
`;

export const Input = styled.input`
  min-width: 50%;
  border-radius: 8px;
  font-size: 12px;
  placeholder: grey;
  padding: 8px 12px;
  outline-color: yellow;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    margin-left: 0;
  }
`;
