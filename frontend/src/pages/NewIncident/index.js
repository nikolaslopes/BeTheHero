import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  ContainerContent,
  Section,
  FormGroup,
} from './styles';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(event) {
    event.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        },
      });

      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente.');
    }
  }

  return (
    <Container>
      <ContainerContent>
        <Section>
          <img src={logoImg} alt="Logo Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para
            resolver isso.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
        </Section>

        <FormGroup onSubmit={handleNewIncident}>
          <Input
            placeholder="Título do caso"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <Input
            placeholder="Valor em reais"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </FormGroup>
      </ContainerContent>
    </Container>
  );
}
