import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 24px;
    margin-top: -5%;
    padding: 0 62px;
  }
`;

export const ContainerUnlogged = styled.div`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 24px;
    padding: 0 62px;
    align-items: flex-start;
  }
`;

export const ImgWrapper = styled.div`
  z-index: -100;
  transform: translateY(-20%);

  @media screen and (min-width: 1280px) {
    transform: translateY(-10%);
  }
`;

export const ImgWrapperUnlogged = styled.div`
  z-index: -1000;
  @media screen and (min-width: 1280px) {
    /* transform: translateY(-5%); */
  }
`;

export const HomeMain = styled.main`
  text-align: center;
`;

export const HomeTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;

  span {
    color: rgba(48, 205, 137, 0.787);
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: -5%;
  }
`;

export const HomeTitleUnlogged = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;

  span {
    color: rgba(48, 205, 137, 0.787);
    margin-left: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`;

export const Footer = styled.footer`
  padding-top: 24px;
  padding-bottom: 32px;
  border-top: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 10000;

  @media screen and (min-width: 1280px) {
    padding-bottom: 42px;
  }
`;

export const Copyright = styled.div``;

export const CopyrightText = styled.p``;

// export const Footer = styled.footer`
//   position: absolute;
//   width: 100%;
//   bottom: 0;
//   padding-top: 24px;
//   padding-bottom: 24px;
//   border-top: 1px solid black;
//   display: flex;

//   justify-content: center;
//   align-items: center;
//   z-index: 10000;

//   @media screen and (min-width: 320px) {
//     width: 320px;
//   }

//   @media screen and (min-width: 768px) {
//     width: 768px;
//   }

//   @media screen and (min-width: 1280px) {
//     width: 1280px;
//   }
// `;
