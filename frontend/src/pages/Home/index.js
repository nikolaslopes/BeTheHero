import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';
import heroesImg from '../../assets/images/heroes.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container, Form, Section,
} from './styles';

export default function Home() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogon(event) {
    event.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente');
    }
  }

  return (
    <Container>
      <Section>

        <img className="logo-img" src={logoImg} alt="Logo Be The Hero" />

        <Form onSubmit={handleLogon}>
          <h1>Faça seu logon</h1>

          <Input
            placeholder="Sua ID"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <Button
            disabled={false}
            type="submit"
          >
            Entrar
          </Button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </Form>
      </Section>
      <img src={heroesImg} alt="Heroes" />

    </Container>
  );
}
