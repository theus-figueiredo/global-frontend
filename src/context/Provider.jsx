import React, { useState } from 'react';
import Context from './Context';

export const Provider = ({ children }) => {
  const [allUsers, setAllUsers] = useState([]);
  const [serviceOrderDetails, setServiceOrderDetails] = useState({});
  const [user, setUser] = useState({
    token: '',
    loggedIn: false,
    costCenter: [],
    role: '',
    firstName: '',
    lastName: '',
    email: ''
  });
  const [allServiceOrders, setAllServiceOrders] = useState([]);
  const [OSFilter, setOSFilter] = useState();
  const [ServiceOrderId, setServiceOrderId] = useState();

  const context = {
    allUsers,
    user,
    allServiceOrders,
    OSFilter,
    ServiceOrderId,
    serviceOrderDetails,
    setAllUsers,
    setUser,
    setAllServiceOrders,
    setOSFilter,
    setServiceOrderId,
    setServiceOrderDetails,
  };

  return(
    <Context.Provider value={context}>
      { children }
    </Context.Provider>
  )
};
