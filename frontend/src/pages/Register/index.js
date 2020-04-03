import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try{
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert(`Erro no cadastro, tente novamente.`);
    }
  }

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

        <form className="register-container__group__form" onSubmit={handleRegister}>
          <input
            placeholder="Nome da ONG"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsApp(e.target.value)}
          />

          <div className="register-container__group__form__group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              value={uf}
              onChange={e => setUf(e.target.value)}
              style={{ width: 80 }}
            />
          </div>

          <button className="register-container__group__form__button" type="submit">Cadastrar</button>
        </form >
      </div>
    </div>
  )
}
