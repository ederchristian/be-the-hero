import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="logon-container__form">
        <img src={logoImg} alt="Be the Hero"/>

        <form className="logon-container__form__item">
          <h1 className="logon-container__form__item__title">Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button className="logon-container__form__item__button" type="submit">Entrar</button>

          <a className="logon-container__form__item__link" href="/register" rel="noopener noreferrer">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </a>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </div>
  );
}
