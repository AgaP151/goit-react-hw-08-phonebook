import { Link } from './NavLink.styled';

export const NavLink = ({ to, status, text }) => {
  return <Link  status={status} to={to}>{text}</Link>;
};
