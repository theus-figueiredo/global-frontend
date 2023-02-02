import React from 'react';
import { Container, Body, Texts } from './styles';

export default function UnauthorizedPage() {
  return (
    <Container>
      <Body>
        <Texts>
          <h1>401</h1>
          <h2>Acesso negado</h2>
          <h5>Faça login, ou busque mais permissões caso esteja logado</h5>
        </Texts>
      </Body>
    </Container>
  )
}