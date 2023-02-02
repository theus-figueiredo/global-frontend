import React from 'react';
import Typography from '@mui/material/Typography';

import { Container } from './styles';

export default function CommentBox({ comment }) {
  return (
    <Container>
      <div class="d-flex flex-start mb-4" style={{"backgroundColor": "#e7effd"}}>
        <div class="card w-100">
          <div class="card-body p-4">
              <div class="row">
                <h5>{`${comment['user']['firstName']} ${comment['user']['lastName']}`}</h5>
                <span class="small">3 hours ago</span>
                <hr />
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
