import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './LoginPage.css';

import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', { email, senha }, { withCredentials: true })
      .then(response => {
        console.log(response.data);
        navigate('/explore');
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('Erro desconhecido ocorreu. Por favor, tente novamente mais tarde.');
        }
      });
  };

  return (
    <div className='main-content'>
      <div className='login_wrapper'>
        <h1>Login</h1>
        <p>Faça o login para entrar no melhor site de webnamoro da internet</p>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" name="email" required id="email" placeholder='Digite seu email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" name="password" required id="password" placeholder='Digite sua senha' value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input type="submit" value="Entrar" />
        </form>
        <div className='new-users'>
          <a href="/client-register/">Novo por aqui? Cadastre-se como usuário</a>
        </div>
        <div className='login_ways'>
          <hr />
          <p>Outras formas de Login</p>
          <hr />
        </div>
        <div className='login_ways_icons'>
          <a href="#">
            <img src={google} alt="google img" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook img" />
          </a>
        </div>
      </div>
      <div className='login_side_background'></div>
    </div>
  );
}

export default LoginPage;
