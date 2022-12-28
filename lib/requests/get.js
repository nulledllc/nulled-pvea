import axios from "axios";

export default class get {
  async get(url, param) {
    var result;

    console.log(`NOTICE: Sending GET request to ${url}.`);

    const options = {
      method: "GET",
      url: this.apiUrl + url,
      params: param,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        CSRFPreventionToken: this.token,
        Cookie: this.ticket,
      },
    };

    await axios(options)
      .then((res) => {
        result = res.data.data;
        console.log(`RESPONSE: ${res}`);
      })
      .catch((err) => {
        result = err.response.status;
        console.log(`ERROR: ${err}`);
      });

    return result;
  }
}
