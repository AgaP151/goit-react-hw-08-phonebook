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
} from './Register.styled';
import { NavLink } from 'components/NavLink/NavLink';
import { Btn } from 'components/Btn/Btn';
import Animation from '../../images/man.gif';
import { registerUser } from './../../redux/authOperations';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
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

    dispatch(registerUser({ name, email, password }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <GoBackLinkWrapper>
        <Btn onClick={() => navigate(-1)} text="Go back" status="goBack" />
        <Header>Let's register</Header>
      </GoBackLinkWrapper>

      <FormWrapper>
        <ImgWrapper>
          <img alt="movie camera" width="100%" srcSet={Animation} />
        </ImgWrapper>
        <Form onSubmit={handleSubmit}>
          <InputsWrapper>
            <Input
              type="text"
              id="auth-name"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+([ -'][a-zA-Zа-яА-Я]+)*$"
              required
              placeholder="Enter your name"
              onChange={onInputChange}
            />
            <Label htmlFor="auth-name">Name</Label>
            <Input
              type="email"
              id="auth-email"
              name="email"
              value={email}
              required
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
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
              <Btn type="submit" status="register" text="Create account" />
              <AuthNotify>Newcomer? Create an account!</AuthNotify>
            </BtnWrapper>

            <BtnWrapper>
              <NavLink text="Log in" status="login" to="/login" />
              <AuthNotify>Already registered? Log in!</AuthNotify>
            </BtnWrapper>
          </BtnsWrapper>
        </Form>
      </FormWrapper>
    </Container>
  );
};

export default Register;
