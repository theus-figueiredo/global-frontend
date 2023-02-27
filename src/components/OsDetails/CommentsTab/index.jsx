import React, { useState, useEffect } from 'react';
import commentService from '../../../service/commentService';

import Loading from '../../Loading/Loading';
import CommentBox from '../CommentBox';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

export default function CommentsTab({serviceOrderId}) {
  const [fetching, setFetching] = useState(true);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState();

  useEffect(() => {
    async function fetchComments() {
      const { data } = await commentService.getAllByOs(serviceOrderId);
      setComments(data);
      setFetching(false);
    }
    fetchComments();
  }, [serviceOrderId]);

  
  const handleDataEntry = ({ target: { value } }) => {setNewComment(value)};
  const handlePostCommentClick = () => { setNewComment('') };

  return(
    <div className='tab-content pt-3'>
      <div className='tab-pane active'>
        <div className='col'>
          <div className='row d-flex justify-content'>
            <div className='col-10'>
              <TextField
                id="filled-multiline-flexible"
                fullWidth={true}
                label="Novo comentário"
                multiline
                maxRows={30}
                variant="outlined"
                onChange={ handleDataEntry }
              />
            </div>
            <div className='col-sm-auto'>
              <button className='btn btn-primary' onClick={handlePostCommentClick}>Enviar <SendIcon /></button>
            </div>
          </div>
          <br />
          <br />
          <h5>Comentários: </h5>
          {fetching && <Loading />}
          {!fetching && comments.map((comment) => <CommentBox key={comment.id} comment={comment}/>)}
        </div>
      </div>
    </div>
  )
}