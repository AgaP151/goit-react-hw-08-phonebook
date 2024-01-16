import { useSelector } from 'react-redux';
import { FaRegCopyright } from 'react-icons/fa';

import {
  HomeMain,
  ImgWrapperUnlogged,
  ImgWrapper,
  HomeTitle,
  Container,
  ContainerUnlogged,
  HomeTitleUnlogged,
  Footer,
  Copyright,
  CopyrightText,
} from './Homepage.styled';
import { selectLogStatus, selectUserName } from './../../redux/authSelectors';
import Animation from '../../images/people.gif';
import Animation2 from '../../images/app.gif';
import { PhonebookLogo } from 'components/Logo/Logo';
const Homepage = () => {
  const isLoggedIn = useSelector(selectLogStatus);
  const name = useSelector(selectUserName);
  return (
    <HomeMain>
      {isLoggedIn ? (
        <Container>
          <ImgWrapper>
            <img alt="animation" width="100%" srcSet={Animation} />
          </ImgWrapper>
          <HomeTitle>
            Hey, <span>{name}</span>, let's check your <PhonebookLogo /> !{' '}
            <br />
            Here we go!
          </HomeTitle>
        </Container>
      ) : (
        <ContainerUnlogged>
          <ImgWrapperUnlogged>
            <img alt="animation" width="100%" srcSet={Animation2} />
          </ImgWrapperUnlogged>
          <HomeTitleUnlogged>
            Welcome to <PhonebookLogo /> ! <br />
            Keep your contacts well organized!
          </HomeTitleUnlogged>
        </ContainerUnlogged>
      )}
      <Footer>
        <Copyright>
          <CopyrightText>
            Copyright
            <FaRegCopyright size={16} />
            2024 <br /> All rights reserved
          </CopyrightText>
        </Copyright>
      </Footer>
    </HomeMain>
  );
};

export default Homepage;
