export default class nodes {
  async listNodes() {
    return await this.get("/nodes");
  }

  async wakeNode(node) {
    return await this.post(`/nodes/${node}/wakeonlan`);
  }

  async nodeApiVersion(node) {
    return await this.get(`/nodes/${node}/version`);
  }

  async listNodeTime(node) {
    return await this.get(`/nodes/${node}/time`);
  }

  async setNodeTimeZone(node, timezone) {
    return await this.push(`/nodes/${node}/time`);
  }

  async listNodeSystemLog(node, params) {
    return await this.get(`/nodes/${node}/syslog`, params);
  }

  async nodeSubscriptionStatus(node) {
    return await this.get(`/nodes/${node}/subscription`);
  }

  async updateNodeSubscriptionStatus(node, force) {
    return await this.post(`/nodes/${node}/subscription`, force);
  }

  async updateNodeSubscriptionKey(node, key) {
    return await this.put(`/nodes/${node}/subscription`, key);
  }

  async deleteNodeSubscriptionKey(node) {
    return await this.del(`/nodes/${node}/subscription`);
  }

  async stopAllOnNode(node, vms) {
    return await this.post(`/nodes/${node}/stopall`, vms);
  }

  async nodeStatus(node) {
    return await this.get(`/nodes/${node}/status`);
  }

  async shutdownNode(node) {
    return await this.post(`/nodes/${node}/status`, { command: shutdown });
  }

  async restartNode(node) {
    return await this.post(`/nodes/${node}/status`, { command: reboot });
  }

  async startAllOnNode(node, params) {
    return await this.post(`/nodes/${node}/startall`, params);
  }

  async getNodeReport(node) {
    return await this.get(`/nodes/${node}/report`);
  }

  async migrateAllOnNode(node, params) {
    return await this.post(`/nodes/${node}/migrateall`, params);
  }

  async listNodeDnsSettings(node) {
    return await this.get(`/nodes/${node}/dns`);
  }

  async updateNodeDnsSettings(node, params) {
    return await this.put(`/nodes/${node}/dns`, params);
  }

  async listNodeConfig(node, params) {
    return await this.get(`/nodes/${node}/config`, params);
  }

  async updateNodeConfig(node, params) {
    return await this.put(`/nodes/${node}/config`, params);
  }
}
