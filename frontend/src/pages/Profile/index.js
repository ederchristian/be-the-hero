import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  return (
    <div className="profile-container">
      <header className="profile-container__header">
        <img className="profile-container__header__logo" src={logoImg} alt="Be the Hero"/>
        <span className="profile-container__header__greeting">Bem-vinda, APAD!</span>

        <Link className="profile-container__header__link" to="/incidents/new">Cadastrar novo caso</Link>
        <button className="profile-container__header__button" tyle="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1 className="profile-container__title">Casos cadastrados</h1>

      <ul className="profile-container__list">
        <li className="profile-container__list__item">
          <strong className="profile-container__list__item__title text-uppercase">Caso:</strong>
          <p className="profile-container__list__item__description">Caso teste</p>

          <strong className="profile-container__list__item__title text-uppercase">Descrição:</strong>
          <p className="profile-container__list__item__description">Descrição teste</p>

          <strong className="profile-container__list__item__title text-uppercase">Valor:</strong>
          <p className="profile-container__list__item__description">R$ 120,00</p>

          <button className="profile-container__list__item__button" type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li className="profile-container__list__item">
          <strong className="profile-container__list__item__title text-uppercase">Caso:</strong>
          <p className="profile-container__list__item__description">Caso teste</p>

          <strong className="profile-container__list__item__title text-uppercase">Descrição:</strong>
          <p className="profile-container__list__item__description">Descrição teste</p>

          <strong className="profile-container__list__item__title text-uppercase">Valor:</strong>
          <p className="profile-container__list__item__description">R$ 120,00</p>

          <button className="profile-container__list__item__button" type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li className="profile-container__list__item">
          <strong className="profile-container__list__item__title text-uppercase">Caso:</strong>
          <p className="profile-container__list__item__description">Caso teste</p>

          <strong className="profile-container__list__item__title text-uppercase">Descrição:</strong>
          <p className="profile-container__list__item__description">Descrição teste</p>

          <strong className="profile-container__list__item__title text-uppercase">Valor:</strong>
          <p className="profile-container__list__item__description">R$ 120,00</p>

          <button className="profile-container__list__item__button" type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>

        <li className="profile-container__list__item">
          <strong className="profile-container__list__item__title text-uppercase">Caso:</strong>
          <p className="profile-container__list__item__description">Caso teste</p>

          <strong className="profile-container__list__item__title text-uppercase">Descrição:</strong>
          <p className="profile-container__list__item__description">Descrição teste</p>

          <strong className="profile-container__list__item__title text-uppercase">Valor:</strong>
          <p className="profile-container__list__item__description">R$ 120,00</p>

          <button className="profile-container__list__item__button" type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
