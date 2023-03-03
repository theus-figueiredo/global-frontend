import http from './http-common'

class CostCenterService {
  endPoint = '/cost-center';

  async getAllCostCenters() {
    return await http.get(this.endPoint);
  };

  async getCostCenterById(id) {
    return await http.get(`${this.endPoint}/${id}`);
  };
};


export default new CostCenterService();
