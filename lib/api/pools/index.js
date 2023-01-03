export default class pools {
  async listPools() {
    return await this.get("/pools");
  }

  async createNewPool(params) {
    return await this.post("/pools", params);
  }

  async listPoolConfig(poolid, type) {
    return await this.get(`/pools/${poolid}`, type);
  }

  async updatePool(poolid, type) {
    return await this.put(`/pools/${poolid}`, params);
  }

  async deletePool(poolid) {
    return await this.del(`/pools/${poolid}`);
  }
}
