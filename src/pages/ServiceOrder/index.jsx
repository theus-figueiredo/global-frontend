import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import OS_Service from '../../service/OS-Service';
import ServiceOrderTable from '../../components/OsTable/Table/Table';
import { Container, Sidebar, Content } from './styles'
import Loading from '../../components/Loading/Loading';
import SideBar from '../../components/SideBar';


export default function ServiceOrderPage() {
  const [fetching, setFetching] = useState(true);
  const { setAllServiceOrders, user } = useContext(Context);

  const navigate = useNavigate()
  
  useEffect(() => {
    const populateData = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await OS_Service.getAll(JSON.parse(token));
        setAllServiceOrders(response.data);
        setFetching(false);

      } catch (error) {
        console.log(error);
      }
    };
    populateData();
  }, [setAllServiceOrders, user, navigate]);


  return (
    <Container>
      <Sidebar>
        <SideBar />
      </Sidebar>

      <Content>
        {fetching && <Loading />}
        {!fetching && <ServiceOrderTable />}
      </Content>
    </Container>
  )
}
