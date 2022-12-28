import axios from "axios";

export default class del {
  async del(url, param) {
    // make sure current authentication token is valid and reauth if needed.
    await this.refreshAuth();

    var result;

    console.log(`NOTICE: Sending DELETE request to ${url}.`);

    const options = {
      method: "DELETE",
      url: this.apiUrl + url,
      data: new URLSearchParams(param).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        CSRFPreventionToken: this.token,
        Cookie: this.ticket,
      },
    };

    await axios(options)
      .then((res) => {
        result = res;
        console.log(`RESPONSE: ${res}`);
      })
      .catch((err) => {
        result = err.response.status;
        console.log(`ERROR: ${err}`);
      });

    return result;
  }
}
