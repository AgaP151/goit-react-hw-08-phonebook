import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomepageLink = styled(NavLink)`
  padding: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
  transform: scale(1);
  box-shadow: none;
  height: fit-content;
  border: 1px solid transparent;

  &:hover,
  &:focus {
    /* transform: scale(1.1); */
    border: ${props =>
      props.status === 'login' || props.status === 'register'
        ? '1px solid transparent'
        : ' 1px solid rgba(0, 128, 75, 0.7)'};

    background-color: ${props =>
      props.status === 'add'
        ? 'rgba(0, 128, 75, 0.7)'
        : props.status === 'login'
        ? 'rgba(71, 207, 150, 0.7)'
        : props.status === 'register'
        ? 'rgba(248, 220, 92, 0.7)'
        : 'transparent'};

    box-shadow: ${props =>
      props.status === 'login' || props.status === 'register'
        ? '0px 14px 6px 4px #cab1b98c'
        : '0px 12px 8px 4px #0b78474d'};
  }

  &.active {
    color: white;
    background-color: rgba(0, 128, 75, 0.7);

    &:hover,
    &:focus {
      border: none;
      color: inherit;
    }
  }

  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }
`;

export const LinkIcon = styled.span`
  display: inline-block;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const LinkText = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;
