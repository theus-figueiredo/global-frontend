import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import { Container } from './style';

export default function UserDetailsForm() {

  const [disabled, setDisabled] = useState(true);

  const handleEditClick = () => {setDisabled(!disabled)};

  return (
    <Container>
      <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' rel="stylesheet"/>
      <div className='container'>
        <div className='row flex-lg-nowrap'>
          {/* <div className='col-12 col-lg-auto mb-3' style={{"width": "200px"}}>
            <div className='card p-3'>
              <div className='e-navlist e-navlist--active-bg'>
                <ul className='nav'>
                  <li className='nav-item'><a className='nav=item'></a></li>
                  <li className='nav-item'><a className='nav=item'></a></li>
                  <li className='nav-item'><a className='nav=item'></a></li>
                </ul>
              </div>
            </div>
          </div> */}


          <div className='col'>
            <div className='row'>
              <div className='col mb-3'>
                <div className='card'>
                  <div className='card-body'>
                    <div className='e-profile'>
                      <div className='row'>

                        <div className='col-12 col-sm-auto mb-3'>
                          <div className='mx-auto' style={{"width": "140px"}}>
                            <div className='d-flex justidy-content-center align-items-center rounded' style={{"backgroundColor": "rgb(233, 236, 239)"}}>
                              <AccountCircleIcon fontSize='large'/><span>Jhon Doe</span>
                            </div>
                          </div>
                        </div>

                        <div className='col d-flex flex-column flex-sm-row justify-content-between mb-3'>
                          <div clasName='text-center text-sm-left mb-2 bm-sm-0'>
                            <span>
                              {disabled && <button className='btn btn-success btn-sm' onClick={handleEditClick}><EditIcon fontSize='small'/> Editar</button>}
                              {!disabled && <button className='btn btn-danger btn-sm' onClick={handleEditClick}><ClearIcon fontSize='small'/> Cancelar</button>}
                            </span>
                          </div>

                          <div className='text-center text-sm-right'>
                            <div style={{"backgroundColor": "#C5D3D3", "borderRadius": "5px", "padding": "3px"}}><span>Encarregado</span></div>
                          </div>
                        </div>

                      </div>

                      <ul className='nav nav-tabs'>
                        <li className='nav-item'><p className='active nav-link'>Configurações</p></li>
                      </ul>

                        <br />

                      <div classname='tab-content pt-3'>
                        <div className='tab-pane active'>
                          <form className='form' noValidate=''>
                            <div className='row'>
                              <div className='col'>
                                <div className='form-group'>
                                  <label>Nome:</label>
                                  <input className='form-control' type='text' name='name' placeholder='Jhon' value='Jhon' disabled={disabled} />
                                </div>
                              </div>

                              <div className='col'>
                                <div className='form-group'>
                                  <label>Sobrenome:</label>
                                  <input className='form-control' type='text' name='lastname' placeholder='Doe' value='Doe' disabled={disabled} />
                                </div>
                              </div>
                            </div>

                              <br />

                            <div className='row'>

                              <div className='col'>
                                <div className='form-group'>
                                  <label>Email: </label>
                                  <input className='form-control' type='emai' name='email' placeholder='jhondoe@email.com' value='jhondoe@email.com' disabled={disabled} />
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
                                <label>Posição:</label>
                                <select className='form-select' aria-label='Defalt select example' disabled={disabled} value='Encarregado'>
                                  <option selected={true}>Encarregado</option>
                                  <option>Recursos Humanos</option>
                                  <option>Comprador</option>
                                  <option>Admin</option>
                                  <option>Financeiro</option>
                                </select>
                              </div>

                              <div className='col'>
                                <label>Unidade</label>
                                <select className='form-select' aria-label='Defalt select example' disabled={disabled} value='Lacem'>
                                  <option selected={true}>Lacem</option>
                                  <option>IETAP</option>
                                  <option>Santa Maria</option>
                                </select>
                              </div>

                            </div>

                            <br />

                            <div className='row'>
                              <div className='col-12 col-sm-6 mb-3'>
                                <div className='mb-2'><b>Alterar Senha</b></div>

                                <div className='row'>
                                  <div className='col'>
                                    <div classNam='form-group'>
                                      <label>Senha Atual:</label>
                                      <input className='form-control' type='password' placeholder='*******' disabled={disabled}/>
                                    </div>
                                  </div>
                                </div>

                                <div className='row'>
                                  <div className='col'>
                                    <div classNam='form-group'>
                                      <label>Nova senha:</label>
                                      <input className='form-control' type='password' placeholder='*******' disabled={disabled}/>
                                    </div>
                                  </div>
                                </div>

                                <div className='row'>
                                  <div className='col'>
                                    <div classNam='form-group'>
                                      <label>Confirme a senha:</label>
                                      <input className='form-control' type='password' placeholder='*******' disabled={disabled}/>
                                    </div>
                                  </div>
                                </div>

                              </div>

                              <div className='row'>
                                <div className='col d-flex justify-content-end'>
                                <button className='btn btn-primary btn-block' disabled={disabled}><SaveIcon fontSize='medium'/> Salvar alterações</button>
                                </div>
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

