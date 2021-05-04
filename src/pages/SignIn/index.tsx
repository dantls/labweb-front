import React, {  ChangeEvent, useCallback, useState } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import './styles.css'
import { Container, Content, Background, AnimationContainer } from './styles';
import { useAuth } from '../../hooks/auth';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();

  const { signIn } = useAuth();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  function handleInputChange(event:ChangeEvent<HTMLInputElement>){
    console.log(event.target.name , event.target.value);
    const {name , value} = event.target; 

    setFormData({...formData, [name]: value});
  }

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/dashboard');
      } 
      
    ,
    [signIn, history],
  );
  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="" />

          <form className="field">
            <h1>Faça seu Logon</h1>

            <div className="field">
              <label htmlFor="email"> E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>
            <div className="field">
              <label htmlFor="password"> Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleInputChange}
              />
            </div>
            
            <button type="submit">Entrar</button> 

            <Link to="/forgot-password">Esqueci minha senha</Link>
          </form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;