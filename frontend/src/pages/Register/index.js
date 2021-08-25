import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/images/logo.svg';

import {
  Container, ContentContainer, Section, GroupForm,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(event) {
    event.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };

    try {
      const response = await api.post('ongs', data);

      alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <Container>
      <ContentContainer>
        <Section>
          <img src={logoImg} alt="Logo Be The Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e
            ajude pessoas a encontrarem os casos da sua Ong.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Home
          </Link>
        </Section>

        <GroupForm onSubmit={handleRegister}>
          <Input
            placeholder="Nome da ONG"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
          />

          <div className="input-group">
            <Input
              placeholder="Cidade"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
            <Input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(event) => setUf(event.target.value)}
            />
          </div>

          <Button className="button" type="submit">Cadastrar</Button>
        </GroupForm>
      </ContentContainer>
    </Container>

  );
}
