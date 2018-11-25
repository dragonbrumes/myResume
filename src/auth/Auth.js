// src/Auth/Auth.js

import auth0 from "auth0-js"
import { withRouter } from "react-router-dom"
import history from "./history"

import { isAuth } from "./../actions/actions"
import store from "../store"

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: process.env.AUTH0_DOMAIN,
      audience: process.env.AUTH0_AUDIENCE,
      clientID: process.env.AUTH0_CLIENTID,
      redirectUri: process.env.AUTH0_REDIRECTURI,
      responseType: "token id_token",
      scope: "openid profile"
    })

    this.getProfile = this.getProfile.bind(this)
    this.handleAuthentication = this.handleAuthentication.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
    this.logIn = this.logIn.bind(this)
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        store.dispatch(isAuth())
        history.replace("/admin/addexperience")
      } else if (err) {
        history.replace("/")
        console.log(err)
      }
    })
  }

  setSession(authResult) {
    this.idToken = authResult.idToken
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem("access_token", authResult.accessToken)
    localStorage.setItem("id_token", authResult.idToken)
    localStorage.setItem("expires_at", expiresAt)
    // navigate to the home route
    history.replace("/")
  }

  silentAuth() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) return reject(err)
        this.setSession(authResult)
        resolve()
      })
    })
  }

  // HELPERS
  signOut() {
    this.auth0.logout({
      returnTo: process.env.AUTH0_RETURNTO,
      clientID: process.env.AUTH0_CLIENTID
    })
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem("access_token")
    localStorage.removeItem("id_token")
    localStorage.removeItem("expires_at")
    // navigate to the home route
    history.replace("/")
  }

  getProfile() {
    return this.profile
  }

  getIdToken() {
    // return this.idToken
    return localStorage.getItem("id_token")
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"))
    return new Date().getTime() < expiresAt
  }

  signIn() {
    this.auth0.authorize()
  }

  logIn() {
    this.auth0.authorize()
  }
}

const auth0Client = new Auth()

export default withRouter(auth0Client)
