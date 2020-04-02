import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-container__group">
        <section className="register-container__group__content">
          <img src={logoImg} alt="Be the Hero"/>
          <h1 className="register-container__group__content__title">Cadastro</h1>
          <p className="register-container__group__content__description">Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="register-container__group__content__link" to="/" rel="noopener noreferrer">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form className="register-container__group__form">
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div className="register-container__group__form__group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="register-container__group__form__button" type="submit">Cadastrar</button>
        </form >
      </div>
    </div>
  )
}
