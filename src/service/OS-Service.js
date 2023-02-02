import http from './http-common';
import axios from 'axios';
const endPoint = '/service-order';

const getAll = async (token) => {

  const allServiceOrders = await axios.get(
    `http://localhost:3001${endPoint}`,
    { headers: { "authorization": token,  "Content-type": "application/json"} }
    );


  return allServiceOrders;
};

const getById = async (id) => {
  const ServiceOrder = await http.get(`${endPoint}/${id}`);
  return ServiceOrder;
}

const OS_Service = {
  getAll,
  getById
}

export default OS_Service;