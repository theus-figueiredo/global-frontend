import http from './http-common';
import axios from 'axios';
const endPoint = '/service-order';

const getAll = async (token) => {

  const allServiceOrders = await axios.get(
    `http://localhost:3001${endPoint}`,
    { headers: { "token": token,  "Content-type": "application/json"} }
    );


  return allServiceOrders;
};

const store = async (data, token) => {
  const newServiceOrder = await axios.post(
    `http://localhost:3001${endPoint}`, data,
    { headers: { "token": token,  "Content-type": "application/json"} },
    
  );

  return newServiceOrder;
};

const getById = async (id) => {
  const ServiceOrder = await http.get(`${endPoint}/${id}`);
  return ServiceOrder;
};

const OS_Service = {
  getAll,
  getById,
  store
};

export default OS_Service;