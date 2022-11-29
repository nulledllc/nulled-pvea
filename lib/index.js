// libraries.
import axios from "axios"

// module class.
class index {

    constructor(hostname, port, username, password, apiKey) {

        // server configuration.
        this.hostname = hostname
        this.port = port
        this.apiUrl = `https://${ this.hostname }:${ this.port }/api2/json`
        this.username = username
        this.password = password
        this.apiKey = apiKey // not sure if Proxmox VE currently supports API keys yet, will check in the future.

        this.ticket = ''
        this.token = ''
        this.token.timeStamp = ''
        this.authorized = false

    }

    // authentication.
    async auth(callback) {

        console.log(`NOTICE: Authenticating with host ${ this.hostname } as user ${ this.username }.`)

        const options = {

            method: 'POST',
            data: `username=${ this.username }&password=${ this.password }`,
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
                this.token.timeStamp = new Date().getTime()

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

        if (new Date().getTime() - this.token.timeStamp > 60 * 60 * 1000) {

            this.auth()

        }

    }

    // WILL WORK ON ALL THIS TOMORROW!

    // send get request
    async get(url, param) {

        await this.refreshAuth()

        console.log(`NOTICE: Sending GET request to ${ url }.`)

    }

        // send GET request
    async get(url, param) {

        await this.refreshAuth()

        console.log(`NOTICE: Sending GET request to ${ url }.`)

    }

    // send POST request
    async post(url, param) {

        await this.refreshAuth()

        console.log(`NOTICE: Sending POST request to ${ url }.`)

    }

    // send PUT request
    async put(url, param) {

        await this.refreshAuth()

        console.log(`NOTICE: Sending PUT request to ${ url }.`)

    }

    // send DELETE request
    async delete(url, param) {

        await this.refreshAuth()

        console.log(`NOTICE: Sending DELETE request to ${ url }.`)

    }

}

export default index