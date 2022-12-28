// libraries.
import axios from "axios";
import mixin from "@nulledllc/nulled-mixin";
import get from "./lib/requests/get.js";
import post from "./lib/requests/post.js";
import put from "./lib/requests/put.js";
import del from "./lib/requests/del.js";

export default class pvea extends mixin(get, post, put, del) {
  constructor(host, port, user, pass, apiKey) {
    super();

    // server configuration.
    this.host = host;
    this.port = port;
    this.apiUrl = `https://${host}:${port}/api2/json`;
    this.user = user;
    this.pass = pass;
    this.apiKey = apiKey;

    // authentication variables.
    this.ticket = "";
    this.token = "";
    this.tokenTimeStamp = 0;
    this.authorized = false;
  }

  async run(callback) {
    console.log(
      `NOTICE: Authenticating with host ${this.host} as user ${this.user}.`
    );

    const options = {
      method: "POST",
      data: `username=${this.user}&password=${this.pass}`,
      url: `${this.apiUrl}/access/ticket`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    // send POST request to Proxmox host to authenticate user, get valid ticket, and valid CSRF token.
    await axios(options)
      .then((res) => {
        // set current ticket, token, and token timestamp.
        this.ticket = `PVEAuthCookie=${res.data.data.ticket}`;
        this.token = res.data.data.CSRFPreventionToken;
        this.tokenTimeStamp = new Date().getTime();

        // set authenticated state to true.
        this.authorized = true;
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
        return err;
      });

    if (callback) {
      await callback();
    }
  }

  async refreshAuth() {
    if (new Date().getTime() - this.tokenTimeStamp > 60 * 60 * 1000) {
      this.run();
    }
  }


}
