import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './ClienteRegister.css';

import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';

const ClientRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem!');
      return;
    }

    axios.post('http://localhost:5000/register', { nome: name, email, senha: password, telefone: phoneNumber })
      .then(response => {
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        // Redirecionar para a página de login após o registro bem-sucedido
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch(error => {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.message);
        } else {
          setErrorMessage('Erro desconhecido ocorreu. Por favor, tente novamente mais tarde.');
        }
        setSuccessMessage('');
      });
  };

  return (
    <div className='main-content'>
      <div className='register_wrapper'>
        <h1>Criar conta</h1>
        <p>Crie uma conta para entrar no melhor site de webnamoro da internet</p>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        {successMessage && <p className='success-message'>{successMessage}</p>}
        <form onSubmit={handleRegister}>
          <input type="email" name="email" required id="email" placeholder='Digite seu email...' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" name="name" required id="fullName" placeholder='Digite seu nome completo...' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="password" name="password" required id="password" placeholder='Digite sua senha...' value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="password" name="confirmPassword" required id="confirmPassword" placeholder='Confirme sua senha...' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <input type="number" name="phoneNumber" required id="phoneNumber" placeholder='Seu Celular ou Telefone...' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <div className='termos-privacidade'>
            <input type="checkbox" name="privacyTerms" id="privacyTerms" required />
            <label htmlFor="privacyTerms">
              Ao se cadastrar no site, você atesta que leu e concorda com nossos 
              <span> Termos</span> e <span>Privacidade</span> e confirma que tem pelo menos <span>18 anos de Idade</span>
            </label>
          </div>
          <input type="submit" value="Entrar" />
        </form>
        <div className='register_ways'>
          <hr />
          <p>Outras formas de Cadastro</p>
          <hr />
        </div>
        <div className='register_ways_icons'>
          <a href="#">
            <img src={google} alt="google img" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook img" />
          </a>
        </div>
      </div>
      <div className='client_side_background'></div>
    </div>
  );
}

export default ClientRegister;
