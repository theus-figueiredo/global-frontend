import React, { useState } from 'react';
import dayjs from 'dayjs';

import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';

export default function DetailsTab({OSData}) {

  const [disabled, setDisabled] = useState(true);

  const handleEditClick = () => setDisabled(!disabled);

  return (
    <div className='tab-content pt-3'>
    <div className='tab-pane active'>
      <form className='form' noValidate=''>
      <div className='row'>

        <div className='col'>
          <label>Aberta em:</label>
          <input className='form-control' type='text' name='createdAt' value={dayjs(OSData.creationDate).format('DD/MM/YYYY HH:MM')} disabled={true} />
        </div>

          <div className='col'>
            <label>Aberta por:</label>
            <input className='form-control' type='text' name='createdBy' value={`${OSData['user']['firstName']} ${OSData['user']['lastName']}`} disabled={true} />
          </div>

        </div>

        <br />

        <div className='row'>
          <div className='col'>
              <div className='form-group'>
              <label>Unidade:</label>
                <select className='form-select' aria-label='Defalt select example' disabled={true} value={OSData['costCenter']['name']}>
                  <option selected={true}>{OSData['costCenter']['name']}</option>
                </select>
              </div>
            </div>

            <div className='col'>
              <div className='form-group'>
                <label>Categoria do Serviço:</label>
                <select className='form-select' aria-label='Defalt select example' disabled={true} value={OSData['category']['category']}>
                  <option selected={true}>{OSData['category']['category']}</option>
                </select>
              </div>
            </div>
          </div>

          <br />

      <div className='row'>

        <div className='col'>
            <label>Urgência:</label>
            <select className='form-select' aria-label='Defalt select example' disabled={disabled} value='P1 - Emergencial'>
              <option>P0 - Muito Emergencial</option>
              <option selected={true}>P1 - Emergencial</option>
              <option>P2 - Regular</option>
              <option>P3 - Prioridade baixa</option>
            </select>
          </div>

          <div className='col'>
            <label>Status:</label>
              <select className='form-select' aria-label='Defalt select example' disabled={disabled} value={OSData['status']['status']}>
                <option selected={true}>{OSData['status']['status']}</option>
              </select>
            </div>

        </div>

        <br />

        <div className='row'>

        <br />
          <div className='col-12 col-sm-6 mb-3'>
            <label>Descrição do serviço:</label>
            <textarea className='form-control' rows={6} placeholder='Descrição' value={OSData.description} disabled={disabled}>{OSData.description}</textarea>
          </div>

          <div className='col-12 col-sm-6 mb-3'>

            <div className='row'>
              <div className='col'>
                <div className='form-group'>
                  <label>Custo de execução:</label>
                  <input className='form-control' type='text' name='executionValue' value={OSData.executionValue} disabled={disabled}/>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <div className='form-group'>
                  <label>Valor à cobrar:</label>
                  <input className='form-control' type='text' name='chargedValue' value={OSData.chargedValue} disabled={disabled}/>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col'>
                <div className='form-group'>
                  <label>Forma de cobrança:</label>
                  <select className='form-select' aria-label='Defalt select example' disabled={disabled} value='EMOP'>
                    <option selected={true}>EMOP</option>
                    <option>SEI LÁ</option>
                  </select>
                </div>
              </div>
            </div>

          </div>


        </div>
          <div className='container'>
          <div className='row d-flex justify-content'>
              <div className='col d-flex justify-content-start'>
                {disabled && <button className='btn btn-primary btn-block' onClick={handleEditClick}><EditIcon fontSize='small'/> Editar</button>}
                {!disabled && <button className='btn btn-danger btn-block' onClick={handleEditClick}><ClearIcon fontSize='small'/> Cancelar</button>}
              </div>
            

              <div className='col d-flex justify-content-end'>
                <button className='btn btn-primary btn-block' disabled={disabled}><SaveIcon fontSize='medium'/> Salvar alterações</button>
              </div>

          </div>
          </div>
      </form>
    </div>
  </div>
  )
}