import React, { useState } from 'react';
import { Container } from './styles';

import AssignmentIcon from '@mui/icons-material/Assignment';
import AddIcon from '@mui/icons-material/Add';

import DetailsTab from '../DetailsTab';
import CommentsTab from '../CommentsTab';


export default function OSDetailsBody({OSData}) {
  const [navTabs, setNavTabs] = useState({
    details: 'active nav-link',
    comments: 'nav-link'
  });

  const [activeTab, setActiveTab] = useState({
    details: true,
    comments: false,
  });

  function handleChangeClick({ target: { id }}) {
    if(id === 'comments') {
      setNavTabs({details: 'nav-link', comments: 'active nav-link'});
      setActiveTab({details: false, comments: true})
    }
    else {
      setNavTabs({ details: 'active nav-link', comments: 'nav-link'});
      setActiveTab({details: true, comments: false});
    }
  }

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
                          <div className='mx-auto' style={{"width": "140px"}}>
                            <div className='d-flex justidy-content-center align-items-center rounded' style={{"backgroundColor": "rgb(233, 236, 239)"}}>
                              <AssignmentIcon fontSize='large'/><span>{OSData.identifier}</span>
                            </div>
                          </div>
                        </div>

                        <div className='col d-flex flex-column flex-sm-row justify-content-between mb-3'>

                        <div clasName='text-center text-sm-left mb-2 bm-sm-0'>
                            <span>
                             <button className='btn btn-danger'><AddIcon fontSize='small'/> Adicionar ao Livro</button>
                            </span>
                          </div>


                          <div className='text-center text-sm-right'>
                            <div style={{"backgroundColor": "#CAD593", "borderRadius": "5px", "padding": "3px"}}><span>{OSData.status.status}</span></div>
                          </div>
                        </div>

                      </div>
                      <ul className='nav nav-tabs'>

                        <li className='nav-item'>
                          <p id='details' className={navTabs.details} onClick={handleChangeClick}>Detalhes</p>
                        </li>

                        <li className='nav-item'>
                          <p id='comments' className={navTabs.comments} onClick={handleChangeClick}>Comentários</p>
                        </li>

                      </ul>
                        <br />

                        {activeTab.details && <DetailsTab OSData={OSData} />}
                        {activeTab.comments && <CommentsTab serviceOrderId={OSData.id} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};