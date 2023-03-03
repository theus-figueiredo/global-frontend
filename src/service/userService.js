import { datePickerToolbarClasses } from '@mui/x-date-pickers';
import http from './http-common';

class UserService {

  endPoints = {
    login: '/login',
    general: '/user'
  }

  async login (email, password) {
    const data = { email, password };
    return await http.post(this.endPoints.login, data);
  }

  async getAll () {
    return await http.get(this.endPoints.general);
  };


  async getById (id) {
    return await http.get(`${this.endPoints.general}/${id}`);
  };

  async updateUser(id, data) {
    return await http.patch(`${this.endPoints.general}/${id}`, {data: data});
  };

  async addCostCenter(userId, costCenters) {
    return await http.post(`${this.endPoints.general}/${userId}/cost-center`, {costCenters});
  };

  async removeCostCenter(userId, ids) {
    const data = {ids};
    return await http.delete(`${this.endPoints.general}/${userId}/cost-center`, {data});
  }

}
export default new UserService();
