import mixin from "extends-classes";
// handle network requests
import get from "./requests/get.js";
import post from "./requests/post.js";
import put from "./requests/put.js";
import del from "./requests/del.js";
// api
import apiVersion from "./api/apiVersion.js";

export default class mixins extends mixin(get, post, put, del, apiVersion) {
    constructor() {
        super();
    }
}