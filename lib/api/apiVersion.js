export default class apiVersion {
  async apiVersion() {
    return await this.get("/version");
  }
}
