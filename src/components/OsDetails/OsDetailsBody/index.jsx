import React, { useState, useContext, useEffect } from 'react';
import CommentAccordion from '../CommentAccordion';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
  { id: 'category', label: 'Categoria', minWidth: 170},
  { id: 'creationDate', label: 'Data de criação', minWidth: 170},
  { id: 'costCenter', label: 'Unidade', minWidth: 170},
  { id: 'status', label: 'Status', minWidth: 170},
];

const columns2 = [
  { id: 'excutionValue', label: 'Custo de execução', minWidth: 170},
  { id: 'requestedAt', label: 'Pedido em', minWidth: 170},
  { id: 'chargedValue', label: 'Valor cobrado', minWidth: 170},
  { id: 'description', label: 'Descrição do serviço', minWidth: 170}
];

export default function ServiceOrderDetails({ OSData }) {

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div className='card shadow mb-4'>
        <TableContainer sx={{ maxHeight: 630 }}>
          <div className='card-header py-3'>
            <h6 className='m-0 font-weight-bold text-primary'>Ordem de Serviço {OSData.identifier}</h6>
            <button className='btn btn-primary btn-sm'>Editar <EditIcon /></button>
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
                  <TableRow>
                    <TableCell>{OSData['category'][0]['category']}</TableCell>
                    <TableCell>{OSData['creationDate']}</TableCell>
                    <TableCell>{OSData['costCenter']['name']}</TableCell>
                    <TableCell>{OSData['status']['status']}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br/>
              <Table>
                <TableHead>
                    <TableRow>
                      {columns2.map((column) => (<TableCell  key={column.id} align={column.align} style={{ minWidth: column.minWidth, backgroundColor: '#D9D9D9' }}>{column.label}</TableCell>))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{OSData['executionValue']}</TableCell>
                      <TableCell>{OSData['requestedAt']}</TableCell>
                      <TableCell>{OSData['chargedValue']}</TableCell>
                      <TableCell>{OSData['description']}</TableCell>
                    </TableRow>
                  </TableBody>
              </Table>
            </div>
          </div>
        </TableContainer>
        </div>
        <CommentAccordion serviceOrderId={OSData['id']}/>
      </Paper>
    </>
  );
}
