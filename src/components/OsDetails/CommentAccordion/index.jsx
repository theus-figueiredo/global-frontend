import React, { useEffect, useState } from 'react';
import commentService from '../../../service/commentService';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import CommentBox from '../CommentBox';
import Loading from '../../Loading/Loading'

export default function CommentAccordion({ serviceOrderId }) {
  const [newComment, setNewComment] = useState('');
  const [fetching, setFetching] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const { data } = await commentService.getAllByOs(serviceOrderId);
      console.log(data);
      setComments(data);
      setFetching(false);
    }
    fetchComments();
  }, [serviceOrderId]);


  const handleDataEntry = ({ target: { value } }) => {setNewComment(value)};
  const handlePostCommentClick = () => { setNewComment('') };


  return (
    <>
      <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Commentários</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {fetching && <Loading />}
          {!fetching && comments.map((comment) => <CommentBox comment={comment}/>)}
          <hr />
          <TextField
            id="filled-multiline-flexible"
            fullWidth={true}
            label="Novo comentário"
            multiline
            maxRows={30}
            variant="filled"
            onChange={ handleDataEntry }
          />
          <button className='btn btn-primary' onClick={handlePostCommentClick}>Enviar<SendIcon /></button>
        </AccordionDetails>
        </Accordion>
      </div>
    </>
  )
}
