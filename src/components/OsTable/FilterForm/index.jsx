import React, { useState, useEffect, useContext } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { OS_StatusService } from '../../../service/OS-StatusService';
import { costCenterService } from '../../../service/costCenterService';

export default function FilterForm({setOS}) {
  const [serviceStatus, setStatus] = useState([]);
  const [costCenters, setCostCenters] = useState([]);
  const [filters, setFilters] = useState({
    identifier: '',
    creationDate: '',
    description: '',
    costCenter: '',
    status: '',
    timeFrame: '',
  });

  const handleOsSearch = (event) => setFilters({...filters, identifier: event.target.value});
  const handleDescriptionSearch = (event) => setFilters({...filters, description: event.target.value});
  const handleCostCenterSearch = (event) => setFilters({...filters, costCenter: event.target.value});
  const handleStatusSearch = (event) => setFilters({...filters, status: event.target.id});
  const handleChange = (event) => setFilters({...filters, timeFrame: event.target.value});

  useEffect(() => {
    async function populateState() {
      const status = await OS_StatusService.getAllStatus();
      const costCenters = await costCenterService.getAllCostCenters();

      setStatus(status.data);
      setCostCenters(costCenters.data);
    };
    populateState();
  }, [setStatus, setCostCenters]);

  return(
    <div className='container-fluid'>
      <p className='mb-4'>Filtros:</p>

      <TextField variant='outlined' label='Número de OS'onChange={handleOsSearch}/>

      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        <InputLabel id="demo-simple-select-autowidth-label">Período</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filters.timeFrame}
          label="período"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Nenhum</em>
          </MenuItem>
          <MenuItem value="maior">Depois de</MenuItem>
          <MenuItem value="menor">Antes de</MenuItem>
          <MenuItem value="igual">Igual a</MenuItem>
        </Select>
        </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          inputFormat='DD/MM/YYYY'
          label="Data"
          value={filters.creationDate}
          onChange={(newValue) => {
            setFilters({...filters, creationDate: dayjs(newValue).format('DD/MM/YYYY')});
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant='outlined' label='Descrição' onChange={handleDescriptionSearch}/>

        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">Unidade</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={filters.costCenter}
            label="Unidade"
            onChange={handleCostCenterSearch}
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {costCenters.map((costCenter) => {
                return(
                <MenuItem value={costCenter.name} key={costCenter.id}>{costCenter['name']}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
      
        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">Status</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={filters.status}
            label="Status"
            onChange={handleStatusSearch}
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {serviceStatus.map((status) => {
              return(
                  <MenuItem id={status.id} value={status.status} key={status.id}>{status['status']}</MenuItem>
                )
              })}
          </Select>
        </FormControl>
      <hr className='my-2'/>
    </div>
  )
}
