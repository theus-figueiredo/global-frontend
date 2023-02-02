import http from './http-common'

const getAllCostCenters = async () => {
  const costCenters = await http.get('/cost-center');
  return costCenters;
};


const getCostCenterById = async (id) => {
  const costCenter = await http.get(`/cost-center/${id}`);
  return costCenter;
};

export const costCenterService = {
  getAllCostCenters,
  getCostCenterById,
};
