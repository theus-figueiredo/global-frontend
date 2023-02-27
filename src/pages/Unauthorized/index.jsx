import React from 'react';
import { Container, Body, Texts } from './styles';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';

export default function UnauthorizedPage() {

  const navigate = useNavigate();

  function handleHomeClick() {
    const redirectLink = '/';
    navigate(redirectLink);
  }

  return (
    <Container>
      <Body>
        <Texts>
          <h1>401</h1>
          <h2>Acesso negado</h2>
          <h5>Faça login, ou busque mais permissões caso esteja logado</h5>
        </Texts>
        <Button onClick={handleHomeClick}>
          <HomeIcon fontSize='large'/><h5>Retornar à Home</h5>
        </Button>
      </Body>
    </Container>
  )
}