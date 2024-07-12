import React from 'react';
import './ModelCard.css';

const ModelCard = ({ nome, descricao, imagem }) => {
  return (
    <div className='card'>
        <div className='img_wrapper'>
            <img style={{ width: '229px', height: '240px' }} src={`http://localhost:5000/uploads/${imagem}`} alt={`${nome}`} />
        </div>
        <div className='description'>
            <h4>{nome}</h4>
            <p>{descricao}</p>
        </div>
    </div>
  );
};

export default ModelCard;
