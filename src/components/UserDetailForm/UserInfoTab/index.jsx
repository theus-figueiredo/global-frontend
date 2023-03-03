import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';

import UserService from '../../../service/UserService';


export default function UserInfoTab({data}) {
  const params = useParams();

  const { allRoles, assignableCostCenters, userData } = data;
  const [disabled, setDisabled] = useState(true);
  const [selectedCostCenters, setSelectedCostCenters] = useState([])
  const [filters, setFilters] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    role: userData.role.id || '',
  });

  const handleEditClick = () => setDisabled(!disabled);

  const handleFormUpdate = ({ target: { id, value }})  => setFilters({...filters, [id]: value});

  const handleFormUpdateForNumericValues = ({ target: { id, value }}) => setFilters({...filters, [id]: Number(value)});

  const handleCostCenterCheck = ({ target: { value, checked }}) => {
    if(checked) setSelectedCostCenters([...selectedCostCenters, Number(value)]);
    if(!checked) setSelectedCostCenters(selectedCostCenters.filter(id => id !== value))
  }
  
  const handleRemoveCostCenterCLick = async ({ target: { id }}) => {
    const ids = [Number(id)];
    await UserService.removeCostCenter(params.id, ids);
    return window.location.reload();
  };

  const handleUpdateUser = async () => {
    await UserService.updateUser(params.id, filters);
  };

  const handleAddCostCenterClick = async () => {
    await UserService.addCostCenter(params.id, selectedCostCenters);
    return window.location.reload();
  }

  return(
    <div className='tab-content pt-3'>
      <div className='tab-pane active'>
        <form className='form' noValidate=''>
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label>Nome:</label>
                <input className='form-control' type='text' id='firstName' value={filters.firstName} disabled={disabled} onChange={handleFormUpdate}/>
              </div>
            </div>

            <div className='col'>
              <div className='form-group'>
                <label>Sobrenome:</label>
                <input className='form-control' type='text' id='lastName' value={filters.lastName} disabled={disabled} onChange={handleFormUpdate}/>
              </div>
            </div>
          </div>

            <br />

          <div className='row'>

            <div className='col'>
              <div className='form-group'>
                <label>Email: </label>
                <input className='form-control' type='emai' id='email' value={filters.email} disabled={disabled} onChange={handleFormUpdate}/>
              </div>
            </div>

            <div className='col'>
              <label>Telefone</label>
              <input className='form-control' type='text' data-mdb-input-mask="+55 21-99999-9999" value='+55 21-99999-9999' name='phone' disabled={disabled} />
            </div>

          </div>

          <br />

          <div className='row'>
            <div className='col'>
              <div className='row'>
                <div className='col-6'>
                  <label>Unidades:  </label>
                  {userData.costCenter.length >= 1 && <ul className='list-group'>
                    {userData.costCenter.map((costCenter) => (
                      <li key={costCenter.id} id={costCenter.id} className='list-group-item list-group-item-secondary d-flex justify-content-between align-items-center'>
                        {costCenter.name}
                        <button type='button' id={costCenter.id} className='btn btn-link btn-sm' disabled={disabled} onClick={handleRemoveCostCenterCLick}><ClearIcon id={costCenter.id}/></button>
                      </li>
                    ))}
                  </ul>}
                  <br />
                </div>
                <div className="col-4">
                  <br />
                  <div className='form-check form-check-scrollable' style={{"maxHeight": "100px"}}>
                    {assignableCostCenters.map((costCenter) => (
                      <div key={costCenter.id}>
                        <input className='form-check-input' type='checkbox' disabled={disabled} value={costCenter.id} id={costCenter.id} onClick={handleCostCenterCheck}/>
                        <label className='form-check-label'>{costCenter.name}</label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='col'>
                  <br />
                  <button type='button' className='btn btn-primary btn-sm' disabled={disabled} onClick={handleAddCostCenterClick}><AddIcon />  Adicionar unidades</button>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
              <div className='row'>
                <div className='col'>
                  <label>Posição:</label>
                  <select className='form-select' aria-label='Defalt select example' id="role" disabled={disabled} value={userData.role.role} onChange={handleFormUpdateForNumericValues}>
                    <option value="">Selecione</option>
                    {allRoles.map((role) => (
                      <option key={role.id} value={role.id}>{role.role}</option>
                  ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <br />

          <div className='container'>
            <div className='row d-flex justify-content'>
              <div className='col d-flex justify-content-start'>
                {disabled && <button className='btn btn-primary btn-block' onClick={handleEditClick}><EditIcon fontSize='small'/> Editar</button>}
                {!disabled && <button className='btn btn-danger btn-block' onClick={handleEditClick}><ClearIcon fontSize='small'/> Cancelar</button>}
              </div>
            

              <div className='col d-flex justify-content-end'>
                <button className='btn btn-primary btn-block' disabled={disabled} onClick={handleUpdateUser}><SaveIcon fontSize='medium'/> Salvar alterações</button>
              </div>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}