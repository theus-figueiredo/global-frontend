import React, {useState, useContext, useEffect} from 'react';
import Context from '../../context/Context';
import OsDetailsBody from '../../components/OsDetails/OsDetailsBody';
import Loading from '../../components/Loading/Loading';
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
    <>
      {fetching && <Loading />}
      {!fetching && <OsDetailsBody OSData={serviceOrder}/>}
    </>
  )
};
