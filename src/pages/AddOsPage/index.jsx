import React, { useEffect, useState } from 'react';
import { Container, Sidebar, Content } from './style';

import SideBar from '../../components/SideBar';
import NewOSForm from '../../components/NewOSForm';
import Loading from '../../components/Loading/Loading';

import { costCenterService } from '../../service/costCenterService';
import { OS_StatusService } from '../../service/OS-StatusService';
import { osServiceCategory } from '../../service/osServiceCategory';

export default function AddOsPage() {
  const [fetchig, setFetching] = useState(true);
  const [allData, setAllData] = useState({
    allStatus: [],
    allCategories: [],
    allCostCenters: []
  });


  useEffect(() => {
    try {

      async function fetchData() {
        const costCenters = await costCenterService.getAllCostCenters();
        const status = await OS_StatusService.getAllStatus();
        const categories = await osServiceCategory.getAll();

        setAllData({
          allCostCenters: costCenters.data,
          allCategories: categories.data,
          allStatus: status.data,
        });

        setFetching(false);
      };

      fetchData();

    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <Container>
      <Sidebar>
        <SideBar />
      </Sidebar>

      <Content>
        {fetchig && Loading}
        {!fetchig && <NewOSForm data={allData}/>}
        {/* {!fetchig && <AddOsForm data={allData}/>} */}
      </Content>
    </Container>
  )
}