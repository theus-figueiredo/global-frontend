import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import { Container, Sidebar, Content } from './styles';
import SideBar from '../../components/SideBar';
import OSDetailsBody from '../../components/OsDetails/DetailsBody';
import http from '../../service/OS-Service';

export default function ServiceOrderDetailsPage() {
  const [fetching, setFetching] = useState(true);
  const [serviceOrder, setServiceOrder] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await http.getById(params.id);
      setServiceOrder(data);
      setFetching(false);
    };
    fetchData();
  },[params]);


  return(
    <Container>
      <Sidebar>
        <SideBar />
      </Sidebar>
      <Content>
        {fetching && <Loading />}
        {!fetching && <OSDetailsBody OSData={serviceOrder}/>}
      </Content>
    </Container>
  )
};
