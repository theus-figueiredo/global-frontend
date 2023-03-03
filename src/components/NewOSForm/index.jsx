import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import SaveIcon from '@mui/icons-material/Save';
import OS_Service from '../../service/OS-Service';

export default function NewOSForm({ data }) {
  const [dataToCreateOS, setDataToCreateOS] = useState({
    costCenter: 0,
    serviceStatus: 0,
    serviceCategory: 0,
    identifier: '',
    description: '',
    requestedAt: new Date(),
    priority: 0
  });

  const navigate = useNavigate();

  function handleChangeForString({ target: { id, value }}) { setDataToCreateOS({...dataToCreateOS, [id]: value })};

  function handleChangeForNumber({ target: { id, value }}) {setDataToCreateOS({...dataToCreateOS, [id]: Number(value)})};

  async function handleCreateClick() {
    const token = localStorage.getItem('token');
    const newServiceOrder = await OS_Service.store(dataToCreateOS, token);

    const redirectLink = `/os/${newServiceOrder.data.id}`;
    navigate(redirectLink);
  };

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
                        <div className='col d-flex justify-content-center'>
                          <div className='d-flex justify-content-center align items-center rounded'>
                            <h5>Abrir Nova Ordem de Serviço</h5>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div className='tab-content pt-3'>
                        <div className='tab-pane active'>
                          <form className='form'>

                            <div className='row'>
                              <div>
                                <label htmlFor='identifier'>Numero da OS:</label>
                                <input type='text' className='form-control' placeholder='OS1234' id='identifier' onChange={handleChangeForString}/>
                              </div>
                            </div>

                            <br />

                            <div className='row'>
                              <div className='col'>
                                <label htmlFor='costCenter'>Unidade:</label>
                                <select className='form-select' id='costCenter' value={dataToCreateOS.costCenter} onChange={handleChangeForNumber}>
                                  <option>Selecionar</option>
                                  {data.allCostCenters.map((costCenter) => <option key={costCenter.id} value={costCenter.id}>{costCenter.name}</option>)}
                                </select>
                              </div>

                              <div className='col'>
                                <label>Urgência: </label>
                                <select className='form-select' id='priority' value={dataToCreateOS.priority} onChange={handleChangeForNumber}>
                                  <option>Selecionar</option>
                                  {data.allPriorities.map((priority) => <option key={priority.id} value={priority.id}>{priority.level}</option>)}
                                </select>
                              </div>
                            </div>

                            <br />

                            <div className='row'>
                              <div className='col'>
                                <label>Categoria do serviço</label>
                                <select className='form-select' id='serviceCategory' value={dataToCreateOS.serviceCategory} onChange={handleChangeForNumber}>
                                  <option>Selecionar</option>
                                  {data.allCategories.map((category) => <option key={category.id} value={category.id}>{category.category}</option>)}
                                </select>
                              </div>

                              <div className='col'>
                                <label htmlFor='serviceStatus'>Status do serviço</label>
                                <select className='form-select' id='serviceStatus' value={dataToCreateOS.serviceStatus} onChange={handleChangeForNumber}>
                                  <option>Selecionar</option>
                                  {data.allStatus.map((status) => <option key={status.id} value={status.id}>{status.status}</option>)}
                                </select>
                              </div>
                            </div>

                            <br />

                            <div className='row align-self-center'>
                              <div className='col '>
                                <label htmlFor='description'>Descritivo:</label>
                                <textarea className='form-control' rows={6} placeholder='Descrição do serviço' value='' id='description' onChange={handleChangeForString}/>
                              </div>
                            </div>

                            <br />

                            <div className='row'>
                              <div className='col d-flex justify-content-start'>
                                <button className='btn btn-primary' onClick={handleCreateClick}><SaveIcon /> Adicionar nova OS</button>
                              </div>
                            </div>

                          </form>
                        </div>
                      </div>

                    </div>
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