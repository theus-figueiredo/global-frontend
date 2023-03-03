import http from "./http-common";

class ChargingTypeService {

  endPoint = '/service-charging';

  async getAll() {
    return await http.get(this.endPoint);
  };

}

export default new ChargingTypeService();
