import React, { useState, useEffect } from 'react';

import Loading from '../Loading/Loading';
import UserInfoTab from './UserInfoTab';
import { Container } from './style';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import UserRoleService from '../../service/UserRoleService';
import CostCenterService from '../../service/CostCenterService';

export default function UserDetailsForm({ userData }) {
  const [assignableCostCenters, setAssignableCostCenters] = useState([]);
  const [allRoles, setAllRoles] = useState([]);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const costCenters = await CostCenterService.getAllCostCenters();
      const userRoles = await UserRoleService.getAll();

      const userCostCenterIds = userData.costCenter.map((item) => item.id);
      setAssignableCostCenters(costCenters.data.filter((item) => !userCostCenterIds.includes(item.id)));
      setAllRoles(userRoles.data.filter((role) => role !== userData.role));
      setFetching(false);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel="stylesheet"/>
      <div className='container'>
        <div className='row flex-lg-nowrap'>

          <div className='col'>
            <div className='row'>
              <div className='col mb-3'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='e-profile'>
                      <div className='row'>

                        <div className='col-12 col-sm-auto mb-3'>
                          <div className='mx-auto' style={{"width": "200px"}}>
                            <div className='d-flex justidy-content-end align-items-center rounded' style={{"backgroundColor": "rgb(233, 236, 239)"}}>
                              <AccountCircleIcon fontSize='large'/><span>{`${userData.firstName} ${userData.lastName}`}</span>
                            </div>
                          </div>
                        </div>

                        <div className='col d-flex flex-column flex-sm-row justify-content-end mb-3'>
                          <div className='text-center text-sm-right'>
                            <div style={{"backgroundColor": "#CAD593", "borderRadius": "5px", "padding": "3px"}}><span>{userData.role.role}</span></div>
                          </div>
                        </div>

                      </div>
                    </div>

                      <ul className='nav nav-tabs'>
                        <li className='nav-item'><p className='active nav-link'>Configurações</p></li>
                      </ul>

                        <br />
                        {fetching && <Loading />}
                        {!fetching && <UserInfoTab data={{userData, assignableCostCenters, allRoles}}/>}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Container>
  )
}

