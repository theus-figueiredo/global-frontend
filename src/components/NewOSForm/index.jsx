import React, { useState } from 'react';

import { Container } from './styles';

import dayjs from 'dayjs';

import SaveIcon from '@mui/icons-material/Save';

const priorityList = [
  {id: 'P0', label: 'P0 - Muito emergêncial'},
  {id: 'P1', label: 'P1 - Emergêncial'},
  {id: 'P2', label: 'P2 - Regular'},
  {id: 'P3', label: 'P3 - Prioridade Baixa'},
];

export default function NewOSForm({ data }) {
  const [dataToCreateOS, setDataToCreateOS] = useState({
    costCenter: '',
    serviceStatus: '',
    serviceCategory: '',
    identifier: '',
    description: '',
    requestedAt: dayjs(),
    priority: ''
  });

  function handleChange({ target: { id, value }}) {
    setDataToCreateOS({...dataToCreateOS, [id]: value})
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
                                <input type='text' className='form-control' placeholder='OS1234' id='identifier' onChange={handleChange}/>
                              </div>
                            </div>

                            <br />

                            <div className='row'>
                              <div className='col'>
                                <label htmlFor='costCenter'>Unidade:</label>
                                <select className='form-select' id='costCenter' value={dataToCreateOS.costCenter} onChange={handleChange}>
                                  <option>Selecionar</option>
                                  {data.allCostCenters.map((costCenter) => <option key={costCenter.id} value={costCenter.id}>{costCenter.name}</option>)}
                                </select>
                              </div>

                              <div className='col'>
                                <label>Urgência: </label>
                                <select className='form-select' id='priority' value={dataToCreateOS.priority} onChange={handleChange}>
                                  <option>Selecionar</option>
                                  {priorityList.map((priority) => <option key={priority.id} value={priority.id}>{priority.label}</option>)}
                                </select>
                              </div>
                            </div>

                            <br />

                            <div className='row'>
                              <div className='col'>
                                <label>Categoria do serviço</label>
                                <select className='form-select' id='serviceCategory' value={dataToCreateOS.serviceCategory} onChange={handleChange}>
                                  <option>Selecionar</option>
                                  {data.allCategories.map((category) => <option key={category.id} value={category.id}>{category.category}</option>)}
                                </select>
                              </div>

                              <div className='col'>
                                <label htmlFor='serviceStatus'>Status do serviço</label>
                                <select className='form-select' id='serviceStatus' value={dataToCreateOS.serviceStatus} onChange={handleChange}>
                                  <option>Selecionar</option>
                                  {data.allStatus.map((status) => <option key={status.id} value={status.id}>{status.status}</option>)}
                                </select>
                              </div>
                            </div>

                            <br />

                            <div className='row align-self-center'>
                              <div className='col '>
                                <label htmlFor='description'>Descritivo:</label>
                                <textarea className='form-control' rows={6} placeholder='Descrição do serviço' value='' id='description' onChange={handleChange}/>
                              </div>
                            </div>

                            <br />

                            <div className='row'>
                              <div className='col d-flex justify-content-start'>
                                <button className='btn btn-primary'><SaveIcon /> Adicionar nova OS</button>
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