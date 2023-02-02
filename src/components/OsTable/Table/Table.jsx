import React, { useState, useContext } from 'react';
import { Paper } from '@mui/material';
import Context from '../../../context/Context';
import FilterForm from '../FilterForm/index'
import OSTableBody from '../TableBody';
import { useEffect } from 'react';

export default function ServiceOrderTable() {
  const { allServiceOrders, user } = useContext(Context);

  const [serviceOrders, setServiceOrders] = useState(allServiceOrders);

  useEffect(() => {
    console.log(user) 
  }, [serviceOrders, allServiceOrders, user])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <div className='card shadow mb-4'>
        <FilterForm setOS={setServiceOrders}/>
        <OSTableBody serviceOrders={serviceOrders}/>
      </div>
    </Paper>
  )
}