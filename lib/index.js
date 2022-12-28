// libraries.
import axios from "axios"


export default class pvea {

    constructor(host, port, user, pass, apiKey) {
        // server configuration.
        this.host = host
        this.port = port
        this.apiUrl = `https://${ host }:${ port }/api2/json`
        this.user = user
        this.pass = pass
        this.apiKey = apiKey 
    
        // authentication variables.
        this.ticket = ''
        this.token = ''
        this.tokenTimeStamp = 0
        this.authorized = false
    }

    async run(callback) {

        console.log(`NOTICE: Authenticating with host ${ this.host } as user ${ this.user }.`)

        const options = {
            method: 'POST',
            data: `username=${ this.user }&password=${ this.pass }`,
            url: `${ this.apiUrl }/access/ticket`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        // send POST request to Proxmox host to authenticate user, get valid ticket, and valid CSRF token.
        await axios(options)
            .then(res => {
                // set current ticket, token, and token timestamp.
                this.ticket = `PVEAuthCookie=${ res.data.data.ticket }`
                this.token = res.data.data.CSRFPreventionToken
                this.tokenTimeStamp = new Date().getTime()

                // set authenticated state to true.
                this.authorized = true
            })
            .catch( err => {
                console.log (`ERROR: ${ err }`)
                return err
            })
    
        if (callback) {
            await callback()
        }
    }

    async refreshAuth() {
        if (new Date().getTime() - this.tokenTimeStamp > 60 * 60 * 1000) {
            this.run()
        }
    }

   // send GET request
    async get(url, param) {

        // make sure current authentication token is valid and reauth if needed.
        await this.refreshAuth()

        var result

        console.log(`NOTICE: Sending GET request to ${ url }.`)

        const options = {
            method: 'GET',
            url: this.apiUrl + url,
            params: param,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'CSRFPreventionToken': this.token,
                'Cookie': this.ticket
            }
        }

        await axios(options)
            .then( res => {
                result = res.data.data
                console.log(`RESPONSE: ${ res }`)
            })
            .catch( err => {
                result = err.response.status
                console.log(`ERROR: ${ err }`)
            })

        return result
    }

    // send POST request
    async post(url, param) {

        // make sure current authentication token is valid and reauth if needed.
        await this.refreshAuth()

        var result

        console.log(`NOTICE: Sending POST request to ${ url }.`)

        const options = {
            method: 'POST',
            url: this.apiUrl + url,
            data: new URLSearchParams(param).toString(),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'CSRFPreventionToken': this.token,
              'Cookie': this.ticket
            }
          }
      
          await axios(options)
            .then( res => {
              result = res
              console.log(`RESPONSE: ${ res }`)
            })
            .catch( err => {
                result = err.response.status
                console.log(`ERROR: ${ err }`)
            })

        return result

    }

    // send PUT request
    async put(url, param) {

        // make sure current authentication token is valid and reauth if needed.
        await this.refreshAuth()

        var result

        console.log(`NOTICE: Sending PUT request to ${ url }.`)

        const options = {
            method: 'PUT',
            url: this.apiUrl + url,
            data: new URLSearchParams(param).toString(),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'CSRFPreventionToken': this.token,
              'Cookie': this.ticket
            }
          }
      
          await axios(options)
            .then( res => {
              result = res
              console.log(`RESPONSE: ${ res }`)
            })
            .catch( err => {
                result = err.response.status
                console.log(`ERROR: ${ err }`)
            })

        return result

    }

    // send DELETE request
    async delete(url, param) {

        // make sure current authentication token is valid and reauth if needed.
        await this.refreshAuth()

        var result

        console.log(`NOTICE: Sending DELETE request to ${ url }.`)

        const options = {
            method: 'DELETE',
            url: this.apiUrl + url,
            data: new URLSearchParams(param).toString(),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              'CSRFPreventionToken': this.token,
              'Cookie': this.ticket
            }
          }
      
          await axios(options)
            .then( res => {
              result = res
              console.log(`RESPONSE: ${ res }`)
            })
            .catch( err => {
                result = err.response.status
                console.log(`ERROR: ${ err }`)
            })

        return result

    }

    async apiVersion() {
        return await this.get('/version')
    }

    
}