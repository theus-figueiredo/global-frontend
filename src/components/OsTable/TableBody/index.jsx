import React, {useState, useEffect, useContext } from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import Context from '../../../context/Context';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const columns = [
  { id: 'identifier', label: 'Número de OS', minWidth: 100},
  { id: 'creationDate', label: 'Data de criação', minWidth: 100},
  { id: 'category', label: 'Tipo De serviço', minWidth: 100},
  { id: 'costCenter', label: 'Unidade', minWidth: 100},
  { id: 'status', label: 'Status', minWidth: 100},
  { id: 'details', label: 'Detalhes', minWidth: 100}
];

export default function OSTableBody({serviceOrders}) {
  const { setServiceOrderId } = useContext(Context);

  const [ page, setPage ] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [amountOfPages, setAmountOfPages] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const getAmountOfPages = () => {
      const serviceOrderLength = serviceOrders.length;
      const pages = serviceOrderLength/rowsPerPage;
      setAmountOfPages(Math.ceil(pages));;
    }
    getAmountOfPages();
  },[setAmountOfPages, rowsPerPage, serviceOrders]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ({ target : { value } }) => {
    setRowsPerPage(value);
    setPage(0);
  }

  const handleSeeMoreClick = ({ target }) => {
    const redirectLink = `/os/${target.id}`;
    setServiceOrderId(target.id);
    navigate(redirectLink);
  }

  const handleAddOsClick = () => {
    const redirectLink = '/OS/AddNew';
    navigate(redirectLink);
  }


  return(
    <Container>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div className='card shadow mb-4'>
        <TableContainer sx={{ maxHeight: 630 }}>
          <div className='card-header py-3'>
            <div style={{ "display" : "flex"}}>
              <h6 className='m-0 font-weight-bold text-primary' style={{ "paddingRight": "75%"}}>Ordens de Serviço</h6>
              <button className='btn btn-primary btn-sm' onClick={handleAddOsClick}><AddIcon /> Adicionar OS</button>
            </div>
          </div>
          <div className="table-responsive">
            <div className='dataTables_wrapper dt-bootstrap4' id="dataTable_wrapper">
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (<TableCell  key={column.id} align={column.align} style={{ minWidth: column.minWidth, backgroundColor: '#D9D9D9' }}>{column.label}</TableCell>))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {serviceOrders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((OS) => { return (<TableRow key={OS.id}>
                    <TableCell>{OS['identifier']}</TableCell>
                    <TableCell>{OS['creationDate']}</TableCell>
                    <TableCell>{OS['category']['category']}</TableCell>
                    <TableCell>{OS['costCenter']['name']}</TableCell>
                    <TableCell>{OS['status']['status']}</TableCell>
                    <TableCell><Button size="small" id={OS.id} onClick={handleSeeMoreClick}>Ver mais</Button></TableCell>
                  </TableRow>)})}
                </TableBody>
              </Table>
            </div>
          </div>
        </TableContainer>
        <TablePagination 
          rowsPerPage={rowsPerPage}
          component="div"
          count={amountOfPages}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </div>
      </Paper>
    </Container>
  )
}
