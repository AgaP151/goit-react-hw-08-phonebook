import { NavLink } from 'components/NavLink/NavLink';

import { LinksWrapper } from './UserLoginMenu.styled';

export const UserLoginMenu = () => {
  return (
    <LinksWrapper>
      <NavLink to="/register" text="Register" />
      <NavLink to="/login" text="Log in" />
    </LinksWrapper>
  );
};
