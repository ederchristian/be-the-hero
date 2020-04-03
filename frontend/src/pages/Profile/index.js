import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);

  const ongId = localStorage.getItem('ongId');
  const ongName = localStorage.getItem('ongName');

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: ongId,
      }
    }).then(response => {
      setIncidents(response.data);
    })
  }, [ongId]);
  
  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId,
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  return (
    <div className="profile-container">
      <header className="profile-container__header">
        <img className="profile-container__header__logo" src={logoImg} alt="Be the Hero"/>
        <span className="profile-container__header__greeting">Bem-vinda, {ongName}!</span>

        <Link className="profile-container__header__link" to="/incidents/new">Cadastrar novo caso</Link>
        <button className="profile-container__header__button" tyle="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1 className="profile-container__title">Casos cadastrados</h1>

      <ul className="profile-container__list">
        {incidents.map(incident => (
          <li className="profile-container__list__item" key={incident.id}>
            <strong className="profile-container__list__item__title text-uppercase">Caso:</strong>
            <p className="profile-container__list__item__description">{incident.title}</p>

            <strong className="profile-container__list__item__title text-uppercase">Descrição:</strong>
            <p className="profile-container__list__item__description">{incident.description}</p>

            <strong className="profile-container__list__item__title text-uppercase">Valor:</strong>
            <p className="profile-container__list__item__description">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button className="profile-container__list__item__button" type="button" onClick={() => handleDeleteIncident(incident.id)}>
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
