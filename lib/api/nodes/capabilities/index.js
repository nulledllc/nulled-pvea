export default class capabilities {
  // I'll have to run these and figure out exactly what they do exactly once flight is over.
  async listNodeCapabilitiesIndex(node) {
    return await this.get(`/nodes/${node}/capabilities`);
  }

  async listNodeVmCapabilitiesIndex(node) {
    return await this.get(`/nodes/${node}/capabilities/qemu`);
  }

  async listAllNodeVmCpuModels(node) {
    return await this.get(`/nodes/${node}/capabilities/qemu/cpu`);
  }

  async listAllNodeVmTypes(node) {
    return await this.get(`/nodes/${node}/capabilities/qemu/machines`);
  }
}
