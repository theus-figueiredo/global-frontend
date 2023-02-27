import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const columns = [
  {id: 'firstName', label: 'Nome', minWidth: 100},
  {id: 'lastName', label: 'Sobrenome', minWidth: 100},
  {id: 'role', label: 'Função', minWidth: 100},
  {id: 'costCenters', label: 'Unidades', minWidth: 100},
  {id: 'email', label: 'Contato', minWidth: 100},
];

export default function UserDataTable({ userData }) {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [amountOfPages, setAmountOfPages] = useState(0);

  const navigate = useNavigate();


  useEffect(() => {
    const getAmountOfPages = () => {
      const serviceOrderLength = 10;
      const pages = serviceOrderLength/rowsPerPage;
      setAmountOfPages(Math.ceil(pages));
      console.log(userData);
    }
    getAmountOfPages();
  },[setAmountOfPages, rowsPerPage, userData]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = ({ target : { value } }) => {
    setRowsPerPage(value);
    setPage(0);
  }

  function handleEditClick({ target: { id }}) {
    const redirectLink = `/users/${id}`;
    navigate(redirectLink);
  }

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div className='card shadow mb-4'>
        <TableContainer sx={{ maxHeight: 630 }}>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>Usuários</h6>
          </div>
          <div className="table-responsive">
            <div className='dataTables_wrapper dt-bootstrap4' id="dataTable_wrapper">
              <Table stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (<TableCell key={column.id} style={{ minWidth: column.minWidth, backgroundColor: '#D9D9D9' }}>{column.label}</TableCell>))}
                    <TableCell style={{ backgroundColor: '#D9D9D9' }}>Detalhes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userData.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user['firstName']}</TableCell>
                      <TableCell>{user['lastName']}</TableCell>
                      <TableCell>{user['role']}</TableCell>
                      <TableCell>{user['costCenter']}</TableCell>
                      <TableCell>{user['email']}</TableCell>
                      <TableCell><Button id={user.id} onClick={handleEditClick}>MAIS / Editar</Button></TableCell>
                    </TableRow>
                  ))}
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
    </>
  )
}