import React from 'react';
import './PlanCard.css';

const PlanCard = ({ minutes, price, description }) => {
    return (
        <div className='plan_card'>
            <div className='minutes'>{minutes}</div>
            <div className='plan_caption'>
                <p className='price'>R$ {price}</p>
                <p className='plan_description'>{description}</p>
                <a className='assign-btn' href="/planos/">Assinar</a>
            </div>
        </div>
    );
};

const PlanContainer = () => {
    return (
        <div className='plan_container'>
            <PlanCard minutes="5 MINUTOS" price="0,00" description="Teste Gratuito Único" />
            <PlanCard minutes="10 MINUTOS" price="5,00" description="Todas as modelos" />
            <PlanCard minutes="30 MINUTOS" price="10,00" description="Todas as modelos" />
            <PlanCard minutes="1 HORA" price="15,00" description="Todas as modelos" />
            <PlanCard minutes="3 HORAS" price="20,00" description="Todas as modelos" />
            <PlanCard minutes="1 DIA" price="25,00" description="Todas as modelos" />
        </div>
    );
};

export default PlanContainer;
