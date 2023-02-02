import http from './http-common';

const getAllStatus = async () => {
  const allStatus = await http.get('/service-status');
  return allStatus;
};

const getStatusById = async (id) => {
  const status = await http.get(`/service-status/${id}`);
  return status;
};


export const OS_StatusService = {
  getAllStatus,
  getStatusById,
};
