import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 16px 32px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 320px) {
    padding: 0 16px 32px 16px;
  }
  @media screen and (min-width: 768px) {
    padding: 0 42px 64px 42px;
  }
`;

export const Header = styled.h2`
  align-self: center;
  text-transform: uppercase;

  @media screen and (min-width: 1280px) {
    margin-right: 45%;
  }
`;

export const GoBackLinkWrapper = styled.div`
  margin-bottom: 16px;
  width: 100%;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  padding: 18px 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 24px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff,
    10px 12px 12px 0px #cab1b14d;

  @media screen and (min-width: 768px) {
    gap: 32px;
    padding: 48px 56px;
    margin-bottom: 20px;
    max-width: 60%;
  }
`;

export const Form = styled.form`
  width: 75%;
  padding: 18px 16px;
  border-radius: 32px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    /* width: 40%; */
    padding: 28px 36px;
  }
`;

export const InputsWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 24px;
  gap: 8px;
  align-self: flex-end;
  flex-direction: column;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const AuthNotify = styled.p`
  display: none;

  @media screen and (min-width: 1280px) {
    z-index: 1000;
    opacity: 0;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(100%, 75%);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    min-width: 110px;
    width: fit-content;
    min-height: 44px;
    text-align: center;
    font-size: 14px;
    line-height: 1.33;
    color: black;
    border: 1px solid yellow;
    border-radius: 10px;
    box-shadow: 0 0 10em 1em rgba(255, 139, 72, 0.6);
  }
`;

export const BtnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;

export const BtnWrapper = styled.div`
  position: relative;

  &:hover > p,
  &:focus > p {
    opacity: 1;
  }
`;

export const Input = styled.input`
  padding: 6px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid black;
  color: black;
  outline-color: yellow;
  background-color: transparent;

  &:hover {
    border-bottom: 1px solid yellow;
  }

  &:focus + .lightbox-modal__auth-label {
    color: yellow;
  }

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    padding: 6px 12px;
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: 16px;
  color: black;

  &:hover,
  &:focus {
    color: yellow;
    font-weight: bold;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const ImgWrapper = styled.div`
  min-width: 25%;
`;
