import React from 'react'
import './PopUpEditar.css'
import {Fade} from 'react-awesome-reveal'
import { IoMdClose } from "react-icons/io";

const PopUpEditar = ({ handleOnClick }) => {
  return (
      <Fade className='popUpEditar'>
        <div>
          <h2>Editar informações <IoMdClose onClick={handleOnClick} /></h2>
          <form>
            <input type="email" name="email" required id="email" placeholder='Edite seu email...'  />
            <input type="text" name="name" required id="fullName" placeholder='Edite seu nome completo...' />
            <input type="password" name="password" required id="password" placeholder='Edite sua senha...' />
            <input type="number" name="phoneNumber" required id="phoneNumber" placeholder='Edite Seu Celular ou Telefone...' />
            <input type="submit" value="Editar" />
          </form>
        </div>
      </Fade>
  )
}

export default PopUpEditar