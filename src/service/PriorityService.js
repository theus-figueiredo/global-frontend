import http from './http-common';

class PriorityService {

  endPoint = `/service-priority`;

  async getAll() {
   return await http.get(`${this.endPoint}`);
  };
};


export default new PriorityService();
