import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  Input,
  Label,
  BtnWrapper,
  BtnsWrapper,
  GoBackLinkWrapper,
  FormWrapper,
  Form,
  AuthNotify,
  InputsWrapper,
  ImgWrapper,
} from './Login.styled';
import { NavLink } from 'components/NavLink/NavLink';
import { Btn } from 'components/Btn/Btn';
import Animation from '../../images/code.gif';
import { loginUser } from './../../redux/authOperations';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(-1);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <GoBackLinkWrapper>
        <Btn onClick={() => navigate(-1)} text="Go back" status="goBack" />
        <Header>Let's log in</Header>
      </GoBackLinkWrapper>

      <FormWrapper>
        <ImgWrapper>
          <img alt="animation" width="100%" srcSet={Animation} />
        </ImgWrapper>
        <Form onSubmit={handleSubmit}>
          <InputsWrapper>
            <Input
              type="email"
              id="auth-email"
              name="email"
              value={email}
              required
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              placeholder="Enter your email"
              onChange={onInputChange}
            />
            <Label htmlFor="auth-email">Email</Label>

            <Input
              type="password"
              id="auth-password"
              name="password"
              value={password}
              required
              minLength="6"
              placeholder="Enter your password"
              onChange={onInputChange}
            />
            <Label htmlFor="auth-password">Password</Label>
          </InputsWrapper>

          <BtnsWrapper>
            <BtnWrapper>
              <Btn type="submit" status="login" text="Log in"></Btn>
              <AuthNotify>Already registered? Log in!</AuthNotify>
            </BtnWrapper>

            <BtnWrapper>
              <NavLink text="Sing up" status="register" to="/register" />
              <AuthNotify>Newcomer? Create an account!</AuthNotify>
            </BtnWrapper>
          </BtnsWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Login;
