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

  // Firewall

  async listContainerFirewallRefs(node, vmid, params) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/firewall/refs`, params);
  }

  async listContainerFirewallOptions(node, vmid) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/firewall/options`);
  }

  async updateContainerFirewallOptions(node, vmid, params) {
    return await this.put(
      `/nodes/${node}/lxc/${vmid}/firewall/options`,
      params
    );
  }

  async listContainerFirewallLog(node, vmid, params) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/firewall/log`, params);
  }

  async listAllContainerFirewallRules(node, vmid) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/firewall/rules`);
  }

  async createNewContainerFirewallRule(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/firewall/rules`, params);
  }

  async listContainerFirewallRuleContent(node, vmid, position) {
    return await this.get(
      `/nodes/${node}/lxc/${vmid}/firewall/rules/${position}`
    );
  }

  async updateContainerFirewallRule(node, vmid, position, params) {
    return await this.put(
      `/nodes/${node}/lxc/${vmid}/firewall/rules/${position}`,
      params
    );
  }

  async deleteContainerFirewallRule(node, vmid, position, params) {
    return await this.del(
      `/nodes/${node}/lxc/${vmid}/firewall/rules/${position}`,
      params
    );
  }

  async listAllContainerFirewallIPSets(node, vmid) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/firewall/ipset`);
  }

  async createNewContainerFirewallIPSet(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/firewall/ipset`, params);
  }

  async listContainerFirewallIPSetContent(node, vmid, name) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/firewall/ipset/${name}`);
  }

  async AddContentToContainerFirewallIPSet(node, vmid, name, params) {
    return await this.post(
      `/nodes/${node}/lxc/${vmid}/firewall/ipset/${name}`,
      params
    );
  }

  async deleteContainerFirewallIPSet(node, vmid, name, params) {
    return await this.del(
      `/nodes/${node}/lxc/${vmid}/firewall/ipset/${name}`,
      params
    );
  }

  async listAllContainerFirewallAliases(node, vmid) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/firewall/aliases`);
  }

  async createNewContainerFirewallAlias(node, vmid, params) {
    return await this.post(
      `/nodes/${node}/lxc/${vmid}/firewall/aliases`,
      params
    );
  }

  async listContainerFirewallAliasContent(node, vmid, name) {
    return await this.get(
      `/nodes/${node}/lxc/${vmid}/firewall/aliases/${name}`
    );
  }

  async updateContainerFirewallAlias(node, vmid, name, params) {
    return await this.put(
      `/nodes/${node}/lxc/${vmid}/firewall/aliases/${name}`,
      params
    );
  }

  async deleteContainerFirewallAlias(node, vmid, name, params) {
    return await this.del(
      `/nodes/${node}/lxc/${vmid}/firewall/aliases/${name}`,
      params
    );
  }

  // Snapshot

  async listAllContainerSnapshots(node, vmid) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/snapshot`);
  }

  async createNewContainerSnapshot(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/snapshot`, params);
  }

  async deleteContainerSnapshot(node, vmid, snapshotName) {
    return await this.del(
      `/nodes/${node}/lxc/${vmid}/snapshot/${snapshotName}`
    );
  }

  async listContainerSnapshotConfig(node, vmid, snapshotName) {
    return await this.get(
      `/nodes/${node}/lxc/${vmid}/snapshot/${snapshotName}/config`
    );
  }

  async updateContainerSnapshotDescription(node, vmid, snapshotName, params) {
    return await this.put(
      `/nodes/${node}/lxc/${vmid}/snapshot/${snapshotName}/config`,
      params
    );
  }

  async rollbackContainerToSnapshot(node, vmid, snapshotName, params) {
    return await this.post(
      `/nodes/${node}/lxc/${vmid}/snapshot/${snapshotName}/rollback`,
      params
    );
  }

  // Status

  async listContainerStatus(node, vmid) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/status/current`);
  }

  async restartContainer(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/status/reboot`, params);
  }

  async resumeContainer(node, vmid) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/status/reboot`);
  }

  async shutdownContainer(node, vmid, params) {
    return await this.post(
      `/nodes/${node}/lxc/${vmid}/status/shutdown`,
      params
    );
  }

  async startContainer(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/status/start`, params);
  }

  async stopContainer(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/status/stop`, params);
  }

  async suspendContainer(node, vmid) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/status/suspend`);
  }

  // Other

  async createNewContainerClone(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/clone`, params);
  }

  async listContainerConfig(node, vmid, pending, params) {
    if (pending === true) {
      return await this.get(`/nodes/${node}/lxc/${vmid}/pending`, params);
    } else {
      return await this.get(`/nodes/${node}/lxc/${vmid}/config`, params);
    }
  }

  async updateContainerConfig(node, vmid, params) {
    return await this.put(`/nodes/${node}/lxc/${vmid}/config`, params);
  }

  async checkContainerFeatureAvailibity(node, vmid, params) {
    return await this.get(`/nodes/${node}/lxc/${vmid}/feature`, params);
  }

  async migrateContainerToNode(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/migrate`, params);
  }

  async resizeContainerDisk(node, vmid, params) {
    return await this.put(`/nodes/${node}/lxc/${vmid}/resize`, params);
  }

  async CreateContainerTemplate(node, vmid, params) {
    return await this.post(`/nodes/${node}/lxc/${vmid}/template`, params);
  }
}
