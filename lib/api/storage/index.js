export default class storage {
  async listStorage(type) {
    return await this.get("/storage", type);
  }

  async createNewStorage(params) {
    return await this.post("/storage", params);
  }

  async listStorageConfig(storage) {
    return await this.get(`/storage/${storage}`);
  }

  async updateStorageConfig(storage, params) {
    return await this.post(`/storage/${storage}`, params);
  }

  async deleteStorageConfig(storage) {
    return await this.del(`/storage/${storage}`);
  }
}
