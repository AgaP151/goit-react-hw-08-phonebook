import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Suspense } from 'react';

import { Container, Header }  from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';
import { Navigation }  from 'components/Navigation/Navigation';
import { UserLogoutMenu }  from 'components/UserLogoutMenu/UserLogoutMenu';
import { UserLoginMenu } from 'components/UserLoginMenu/UserLoginMenu';
import { selectLogStatus } from '../../redux/authSelectors';
import { PhonebookLogo }  from 'components/Logo/Logo';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectLogStatus);
  return (
    <Container>
      <Header>
        <Navigation />
        <PhonebookLogo />
        {isLoggedIn ? <UserLogoutMenu /> : <UserLoginMenu />}
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
