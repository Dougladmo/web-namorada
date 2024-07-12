import React, { useEffect, useState } from 'react';
import axios from 'axios';

import SideBar from '../../components/SideBar/SideBar';
import { FaSearch } from 'react-icons/fa';

import './Explore.css';
import ModelCard from '../../components/ModelCard/ModelCard';

const Explore = () => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await axios.get('http://localhost:5000/models');
        setModels(response.data);
      } catch (error) {
        console.error('Error fetching models:', error);
      }
    };

    fetchModels();
  }, []);

  return (
    <div className='explore'>
      <div className='explore_left'>
        <SideBar handleModelos='active_modelos' />
      </div>
      <div className='explore_right'>
        <div className='explore_header'>
          <h3>Explore:</h3>
          <div className='explore_nav'>
            <ul>
              <li><a href="#">Populares</a></li>
              <li><a href="#">Novas</a></li>
              <li><a href="#">Top escolhas</a></li>
              <li><a href="#">Favoritas</a></li>
            </ul>
          </div>
          <a href="#" className='search_btn'>Procurar <FaSearch /></a>
        </div>
        <div className='explore_models'>
          {models.map(model => (
            <ModelCard 
              key={model.id_modelo} 
              id={model.id_modelo}
              nome={model.nome} 
              descricao={model.descricao} 
              imagem={model.imagem} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
