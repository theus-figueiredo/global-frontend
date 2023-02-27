import React from 'react';
import Typography from '@mui/material/Typography';

import { Container } from './styles';

export default function CommentBox({ comment }) {

  return (
    <Container>
      <div className="d-flex flex-start mb-4" style={{"backgroundColor": "#e7effd"}}>
        <div className="card w-100">
          <div className="card-body p-4">
              <div className="row">
                <div className='row'>
                  <div className='col'>
                    <h6>{`${comment['user']['firstName']} ${comment['user']['lastName']} // `} <span style={{"color": "#FF4747"}}>{comment.user.role.role}</span></h6>
                  </div>
                  <div className='col d-flex justify-content-end'>
                    <span className="small">3 hours ago</span>
                  </div>
                </div>
                <hr />
                <br />
                <Typography>
                  {comment['comment']}
                </Typography>
              </div>
            </div>
          </div>
        </div>
    </Container>
  );
}
