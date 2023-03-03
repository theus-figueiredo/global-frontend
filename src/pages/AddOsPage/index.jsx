import React, { useEffect, useState } from 'react';
import { Container, Sidebar, Content } from './style';

import SideBar from '../../components/SideBar';
import NewOSForm from '../../components/NewOSForm';
import Loading from '../../components/Loading/Loading';

import CostCenterService from '../../service/CostCenterService';
import OsStatusService from '../../service/OsStatusService';
import { osServiceCategory } from '../../service/osServiceCategory';
import PriorityService from '../../service/PriorityService';

export default function AddOsPage() {
  const [fetchig, setFetching] = useState(true);
  const [allData, setAllData] = useState({
    allStatus: [],
    allCategories: [],
    allCostCenters: [],
    allPriorities: [],
  });


  useEffect(() => {
    try {

      async function fetchData() {
        const costCenters = await CostCenterService.getAllCostCenters();
        const status = await OsStatusService.getAllStatus();
        const categories = await osServiceCategory.getAll();
        const priorities = await PriorityService.getAll();

        setAllData({
          allCostCenters: costCenters.data,
          allCategories: categories.data,
          allStatus: status.data,
          allPriorities: priorities.data,
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
      </Content>
    </Container>
  )
}