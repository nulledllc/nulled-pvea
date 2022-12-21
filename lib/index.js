// libraries.
import axios from "axios"

// module class.
class main {

    constructor(hostname, port, username, password, apiKey) {

        // server configuration.
        this.hostname = hostname
        this.port = port
        this.apiUrl = `https://${ this.hostname }:${ this.port }/api2/json`
        this.username = username
        this.password = password
        this.apiKey = apiKey // not sure if Proxmox VE currently supports API keys yet, will add in the future if so.

        this.ticket = ''
        this.token = ''
        this.tokenTimeStamp = 0
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
                this.tokenTimeStamp = new Date().getTime()

                // set authenticated state to true.
                this.authorized = true

            })
            .catch( err => {
                
                console.log (`ERROR: ${ err }`)
                return err

            })
    
        // unsure exactly what this is for? It's in my original code though.
        if (callback) {

            await callback()

        }

    }

    async refreshAuth() {

        if (new Date().getTime() - this.tokenTimeStamp > 60 * 60 * 1000) {

            this.auth()

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
                console.log(`ERROR: ${ res }`)

            })

        return result

    }

    // send POST request
    async post(url, param) {

        // make sure current authentication token is valid and reauth if needed.
        await this.refreshAuth()

        console.log(`NOTICE: Sending POST request to ${ url }.`)

    }

    // send PUT request
    async put(url, param) {

        // make sure current authentication token is valid and reauth if needed.
        await this.refreshAuth()

        console.log(`NOTICE: Sending PUT request to ${ url }.`)

    }

    // send DELETE request
    async delete(url, param) {

        // make sure current authentication token is valid and reauth if needed.
        await this.refreshAuth()

        console.log(`NOTICE: Sending DELETE request to ${ url }.`)

    }

    // root

    // get
   
    async apiVersion() {
        return await this.get('/version')
    }


    // storage

    

    // pools

    // nodes

    // cluster

    // access
    
}

export default main