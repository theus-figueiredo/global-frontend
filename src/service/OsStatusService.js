import http from './http-common';

class OsStatusService {
  endPoint = '/service-status';

  async getAllStatus() {
    return await http.get(this.endPoint);
  };


  async getStatusById(id) {
    return await http.get(`${this.endPoint}/${id}`);
  };
}

export default new OsStatusService();