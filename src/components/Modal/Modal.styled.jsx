import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const ModalWindow = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  background-color: white;
  border-radius: 12px;
  box-shadow: inset 2px 2px 5px #babecc, inset -5px -5px 10px #fff;
  opacity: 1;
`;
