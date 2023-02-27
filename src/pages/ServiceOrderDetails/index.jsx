import React, {useState, useContext, useEffect} from 'react';
import Context from '../../context/Context';
import Loading from '../../components/Loading/Loading';
import { Container, Sidebar, Content } from './styles';
import SideBar from '../../components/SideBar';
import OSDetailsBody from '../../components/OsDetails/DetailsBody';
import http from '../../service/OS-Service';

export default function ServiceOrderDetailsPage() {
  const { ServiceOrderId } = useContext(Context);
  const [fetching, setFetching] = useState(true);
  const [serviceOrder, setServiceOrder] = useState();

  useEffect(() => {
    async function fetchData() {
      const { data } = await http.getById(ServiceOrderId);
      setServiceOrder(data);
      setFetching(false);
    };
    fetchData();
  },[ServiceOrderId])


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
