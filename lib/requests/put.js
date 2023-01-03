import axios from "axios";

export default class put {
  async put(url, param) {
    // make sure current authentication token is valid and reauth if needed.
    await this.refreshAuth();

    var result;

    console.log(`NOTICE: Sending PUT request to ${url}.`);

    const options = {
      method: "PUT",
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
        result = res.data;
        console.log(`RESPONSE: ${res}`);
      })
      .catch((err) => {
        result = err.response.status;
        console.log(`ERROR: ${err}`);
      });

    return result;
  }
}
