export default class certificates {
  async orderNewLetsEncryptCert(node, params) {
    return await this.post(
      `/nodes/${node}/certificates/amce/certificate`,
      params
    );
  }

  async renewLetsEncryptCert(node, params) {
    return await this.put(
      `/nodes/${node}/certificates/amce/certificate`,
      params
    );
  }

  async revokeLetsEncryptCert(node) {
    return await this.post(`/nodes/${node}/certificates/amce/certificate`);
  }
}
