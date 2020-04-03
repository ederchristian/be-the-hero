import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="new-incident-container__group">
        <section className="new-incident-container__group__content">
          <img src={logoImg} alt="Be the Hero"/>
          <h1 className="new-incident-container__group__content__title">Cadastrar novo caso</h1>
          <p className="new-incident-container__group__content__description">Descreva o caso detalhadamente para encontrar um herói ou uma heroína para resolver isso.</p>

          <Link className="new-incident-container__group__content__link" to="/profile" rel="noopener noreferrer">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>

        <form className="new-incident-container__group__form">
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="WhatsApp" />
          <input placeholder="Valor em Reais" />

          <button className="new-incident-container__group__form__button" type="submit">Cadastrar</button>
        </form >
      </div>
    </div>
  );
}
