import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import UserDataTable from '../../components/UserTable';
import UserService from '../../service/UserService';
import Loading from '../../components/Loading/Loading';
import SideBar from '../../components/SideBar';

export default function UserManagementPage() {
  const [users, setUsers] = useState();
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function getAllUsers() {
      const { data } = await UserService.getAll();
      const allUsers = [];

      data.forEach((user) => {
        let names;
        let role;

        if (user.costCenter !== null) {
          names = user.costCenter.map((cc) => cc.name);
        } else { names = 'Nenhum' }

        if (user.role !== null) role = user.role.role
        else role = 'Pendente';

        const userInfo = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          costCenter: names,
          role: role,
          email: user.email,
        };

        allUsers.push(userInfo);
      });
      setUsers(allUsers);
      setFetching(false);
    }
    getAllUsers();
  }, [setUsers]);

  return(
    <Container>
      <SideBar />
      {fetching && <Loading />}
      {!fetching && <UserDataTable userData={ users }/>}
    </Container>
  )
};
