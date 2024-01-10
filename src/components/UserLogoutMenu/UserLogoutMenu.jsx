import { useDispatch, useSelector } from 'react-redux';
import { BiHappyBeaming } from 'react-icons/bi';
import { Wrapper, WelcomeText } from './UserLogoutMenu.styled';
import { logoutUser } from '../../redux/authOperations';
import { getUserName } from '../../redux/authSelectors';
import { Btn } from 'components/Btn/Btn';

export const UserLogoutMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

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
        onClick={() => dispatch(logoutUser())}
      />
    </Wrapper>
  );
};
