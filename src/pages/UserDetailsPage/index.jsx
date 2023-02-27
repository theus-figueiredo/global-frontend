import React from 'react';
import UserDetailsForm from '../../components/UserDetailForm';
import SideBar from '../../components/SideBar';
import { Container } from './style'

export default function UserDetailsPage() {
  return (
    <Container>
      <SideBar />
      <UserDetailsForm />
    </Container>
  )
}

