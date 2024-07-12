import React, { useState } from 'react';
import axios from 'axios';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import './ModelRegister.css';

const ModelRegister = () => {
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem');
      return;
    }

    const formData = new FormData();
    formData.append('email', email);
    formData.append('nome', nome);
    formData.append('senha', senha);
    formData.append('cpf', cpf);
    formData.append('descricao', descricao);
    formData.append('imagem', imagem);

    try {
      await axios.post('http://localhost:5000/register_model', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('Modelo registrado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <div className="model-register-container">
      <form className='model_register_form' onSubmit={handleSubmit}>
        <h2>CRIE SUA CONTA</h2>
        <h3>ÁREA EXCLUSIVA PARA MODELOS</h3>
        <p>Crie uma conta para entrar no melhor site de webnamoro da internet</p>
        <input type="email" placeholder="Digite seu email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="text" placeholder="Digite seu nome completo..." value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="password" placeholder="Digite sua senha..." value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <input type="password" placeholder="Confirme sua senha..." value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} required />
        <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={(e) => setCpf(e.target.value)} required />
        <textarea style={{ width: '100%'}} placeholder="Digite sua descrição..." value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        <input style={{ width: '100%', marginTop: '10px', color: 'white', marginBottom: '10px'}} type="file" onChange={(e) => setImagem(e.target.files[0])} required />
        <label>
          <input type="checkbox" required />
          Ao se cadastrar no site, você atesta que leu e concorda com nossos Termos e Privacidade e confirma que tem pelo menos 18 anos de idade.
        </label>
        <button type="submit">Entrar</button>
        <div className="other-signup">
          <p>Outras formas de Cadastro</p>
          <div className="signup-icons">
            <img src={google} alt="Google" />
            <img style={{ width: '20px' }} src={facebook} alt="Facebook" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModelRegister;
