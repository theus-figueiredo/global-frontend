import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context/Context';
import OS_Service from '../../service/OS-Service';
import ServiceOrderTable from '../../components/OsTable/Table/Table';
import Loading from '../../components/Loading/Loading';

export default function ServiceOrderPage() {
  const [fetching, setFetching] = useState(true);
  const { setAllServiceOrders, user } = useContext(Context);

  const navigate = useNavigate()
  
  useEffect(() => {
    const populateData = async () => {
      try {
        const response = await OS_Service.getAll(user.token);
        setAllServiceOrders(response.data);
        setFetching(false);

      } catch (error) {
        navigate('/unauthorized')
      }
    };
    populateData();
  }, [setAllServiceOrders, user, navigate]);


  return (
    <div className='container-fluid'>
      {fetching && <Loading />}
      {!fetching && <ServiceOrderTable />}
    </div>
  )
}
