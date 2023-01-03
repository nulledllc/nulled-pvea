import del from "../requests/del.js";
import get from "../requests/get.js";
import post from "../requests/post.js";
import put from "../requests/put.js";

export default class myApi {
    async apiVersion() {
        return await this.get('/version')
    }
}