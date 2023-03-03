import React, { useState, useEffect, useContext } from 'react';
import Context  from '../../../context/Context';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OsStatusService from '../../../service/OsStatusService';
import CostCenterService from '../../../service/CostCenterService';
import { osServiceCategory } from '../../../service/osServiceCategory';

export default function FilterForm({setOS}) {

  const { OSFilter, setOSFilter } = useContext(Context);
  
  const [serviceStatus, setStatus] = useState([]);
  const [costCenters, setCostCenters] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filters, setFilters] = useState({
    identifier: '',
    creationDate: '',
    category: '',
    costCenter: '',
    status: '',
    timeFrame: '',
  });

  const handleOsSearch = (event) => setOSFilter({...OSFilter, identifier: event.target.value});
  const handleCategorySearch = (event) => setOSFilter({...OSFilter, category: event.target.value});
  const handleCostCenterSearch = (event) => setOSFilter({...OSFilter, costCenter: event.target.value});
  const handleStatusSearch = (event) => setOSFilter({...OSFilter, status: event.target.id});
  const handleChange = (event) => setOSFilter({...OSFilter, timeFrame: event.target.value});

  useEffect(() => {
    async function populateState() {
      const status = await OsStatusService.getAllStatus();
      const costCenters = await CostCenterService.getAllCostCenters();
      const { data } = await osServiceCategory.getAll();

      setStatus(status.data);
      setCostCenters(costCenters.data);
      setCategories(data);
    };
    populateState();
  }, [setStatus, setCostCenters]);

  return(
    <div className='container-fluid'>
      <p className='mb-4'>Filtros:</p>

      <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
        <InputLabel id="demo-simple-select-autowidth-label">Período</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={OSFilter.timeFrame}
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
          value={OSFilter.creationDate}
          onChange={(newValue) => {
            setOSFilter({...OSFilter, creationDate: dayjs(newValue).format('DD/MM/YYYY')});
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>

      <TextField variant='outlined' label='Número de OS'onChange={handleOsSearch}/>

        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">Unidade</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={OSFilter.costCenter}
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
            value={OSFilter.status}
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

        <FormControl sx={{ m: 1, minWidth: 100 }} size="small">
          <InputLabel id="demo-simple-select-autowidth-label">Tipo de Serviço</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={OSFilter.category}
            label="Serviço"
            onChange={handleCategorySearch}
          >
            <MenuItem value="">
              <em>Nenhum</em>
            </MenuItem>
            {categories.map((category) => {
              return(
                  <MenuItem id={category.id} value={category.category} key={category.id}>{category['category']}</MenuItem>
                )
              })}
          </Select>
        </FormControl>
      <hr className='my-2'/>
    </div>
  )
}
