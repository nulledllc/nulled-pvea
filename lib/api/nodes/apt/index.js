export default class apt {
  async listPackageDirectoryIndex(node) {
    return await this.get(`/nodes/${node}/apt`);
  }

  async ListPackageChangelog(node, params) {
    return await this.get(`/nodes/${node}/apt/changelog`, params);
  }

  async listPackageRepos(node) {
    return await this.get(`/nodes/${node}/apt/repositories`);
  }

  async togglePackageRepo(node, params) {
    return await this.post(`/nodes/${node}/apt/repositories`, params);
  }

  async addNewPackageRepo(node, params) {
    return await this.put(`/nodes/${node}/apt/repositories`, params);
  }

  async ListAvailablePackageUpdates(node) {
    return await this.get(`/nodes/${node}/apt/update`);
  }

  async fetchNewPackageUpdates(node, params) {
    return await this.post(`/nodes/${node}/apt/update`, params);
  }

  async listPackageVersions(node) {
    return await this.get(`/nodes/${node}/apt/versions`);
  }
}
