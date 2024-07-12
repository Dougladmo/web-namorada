import React from 'react';

import './SideBarNav.css';

const SideBarNav = ({ modelos, planos, perfil, mensagens, config, suporte }) => {
  return (
    <div className='navbar'>
        <a className={`${modelos}`} href="/explore/">modelos</a>
        <a className={`${planos}`} href="/planos/">planos</a>
        <a className={`${perfil}`} href="/perfil-cliente/">perfil</a>
        <a className={`${mensagens}`} href="/chat/">mensagens</a>
        <a className={`${config}`} href="/configuracao-cliente/">configurações</a>
        <a className={`${suporte}`} href="/suporte/">suporte</a>
    </div>
  )
}

export default SideBarNav;
