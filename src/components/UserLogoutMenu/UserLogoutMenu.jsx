import { useDispatch, useSelector } from 'react-redux';
import { BiHappyBeaming } from 'react-icons/bi';
import { Wrapper, WelcomeText } from './UserLogoutMenu.styled';
import { logoutUser } from '../../redux/authOperations';
import { selectUserName } from '../../redux/authSelectors';
import { Btn } from 'components/Btn/Btn';

export const UserLogoutMenu = () => {
  const dispach = useDispatch();
  const name = useSelector(selectUserName);

  const handleLogout = event => {
    event.preventDefault();
    dispach(logoutUser());
  };

  return (
    <Wrapper>
      <WelcomeText>
        <span>
          <BiHappyBeaming size={24} />
        </span>
        <p>Welcome back, {name} !</p>
      </WelcomeText>
      <Btn
        status="logout"
        type="button"
        text="Log out"
        onClick={handleLogout}/>
    </Wrapper>
  );
};
