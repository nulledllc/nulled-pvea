import mixin from "extends-classes";
// handle network requests
import get from "./requests/get.js";
import post from "./requests/post.js";
import put from "./requests/put.js";
import del from "./requests/del.js";
// api
import apiVersion from "./api/apiVersion.js";
import storage from "./api/storage/index.js";
import pools from "./api/pools/index.js";
import nodes from "./api/nodes/index.js";
import lxc from "./api/nodes/lxc/index.js";
import apt from "./api/nodes/apt/index.js";
import capabilities from "./api/nodes/capabilities/index.js";
import certificates from "./api/nodes/certificates/index.js";

export default class mixins extends mixin(
  get,
  post,
  put,
  del,
  apiVersion,
  storage,
  pools,
  nodes,
  lxc,
  apt,
  capabilities,
  certificates
) {
  constructor() {
    super();
  }
}
