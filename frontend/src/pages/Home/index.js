import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import {
  Container,
  Form,
  Section,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import heroesImg from '../../assets/images/heroes.png';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

export default function Home() {
  const [id, setId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  async function handleLogon(event) {
    event.preventDefault();

    try {
      await api.post('sessions', { id })
        .then((response) => {
          localStorage.setItem('ongId', id);
          localStorage.setItem('ongName', response.data.name);

          setIsLoading(true);
          setTimeout(() => {
            history.push('/profile');
          }, 2000);
        });
    } catch (error) {
      alert('Falha no login, tente novamente');
      console.log('error', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loader isLoading={isLoading} />
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
