import http from "./http-common";

class UserRoleService {
  endPoint = '/role';

  async getAll() {
    return await http.get(this.endPoint);
  };

  async getById(id) {
    return await http.get(`${this.endPoint}/${id}`);
  };
};

export default new UserRoleService();
