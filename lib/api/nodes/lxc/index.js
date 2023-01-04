export default class lxc {
  async listContainers(node) {
    return await this.get(`/nodes/${node}/lxc`);
  }

  async createContainer(node, params) {
    return await this.post(`/nodes/${node}/lxc`, params);
  }
  async deleteContainer(node, vmid, params) {
    return await this.delete(`/nodes/${node}/lxc/${vmid}`, params);
  }
}
