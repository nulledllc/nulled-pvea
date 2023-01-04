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
}
