import React, { useEffect, useState } from 'react';
import axios from 'axios';

import user from '../../images/user-profile-img.png';

import SideBar from '../../components/SideBar/SideBar';
import LastOrderCard from '../../components/LastOrderCard/LastOrderCard';
import TimeCard from '../../components/TimeCard/TimeCard';
import FavoriteModel from '../../components/FavoriteModelCard/FavoriteModel';

import './ClientProfile.css';
import PopUpEditar from '../../components/PopUpEditar/PopUpEditar';

const ClientProfile = () => {
  const [editOpened, setEditOpened] = useState(false)
  const [userInfo, setUserInfo] = useState({
    nome: 'Nome_Usuario',
    email: '',
    telefone: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/user_info', { withCredentials: true })
      .then(response => {
        if (response.data) {
          setUserInfo(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching user info', error);
      });
  }, []);

  return (
    <div className='explore_client explore_client_editOpened'>
      {editOpened && <div className="overlay" onClick={() => setEditOpened(false)}></div>}
      <div className='explore_left_client'>
        <SideBar handlePerfil='active_perfil' />
      </div>
      <div className='explore_right_client'>
        <div className='profile_wrapper'>
          <div className='info_wrapper'>
            <div className='profile'>
              <label htmlFor='file_input' className='file_input_label profile_image'>
                <span>Editar imagem</span>
                <img  src={user} alt="user image" />
              </label>
              <input
                type='file'
                id='file_input'
                className='file_input'
              />
              <p>{userInfo.nome}</p>
            </div>
            <div className='client_info'>
              <p>Nome Completo: <span>{userInfo.nome}</span></p>
              <p>Email: <span>{userInfo.email}</span></p>
              <p>Senha: <span>****************</span></p>
              <p>Telefone: <span>{userInfo.telefone}</span></p>
              <a onClick={() => setEditOpened(true)} href="#" className='edit_btn'>editar</a>
            </div>
          </div>
          <div className='order_info'>
            <LastOrderCard />
            <TimeCard />
            <FavoriteModel />
            {editOpened && <PopUpEditar handleOnClick={() => setEditOpened(false)} /> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
