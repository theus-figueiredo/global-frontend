import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserDetailsForm from '../../components/UserDetailForm';
import Loading from '../../components/Loading/Loading';
import UserService from '../../service/UserService';
import SideBar from '../../components/SideBar';
import { Container } from './style'

export default function UserDetailsPage() {
  const [userData, setUserData] = useState({});
  const [fetchig, setFetching] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      const { data } = await UserService.getById(id);

      let role;

      if (data.role !== null) role = data.role
      else role = 'Nenhum';

      const userInfo = {
        id: data.id,
        firstName: data.firstName,
        lastName: data.lastName,
        costCenter: data.costCenter,
        role: role,
        email: data.email,
      };
  
      setUserData(userInfo);
      setFetching(false);
    };

    fetchUserData();
  }, [id, userData]);


  return (
    <Container>
      <SideBar />
      {fetchig && <Loading />}
      {!fetchig && <UserDetailsForm userData={ userData }/>}
    </Container>
  )
}

