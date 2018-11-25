import React from "react"

export default props => (
  <div>
    <h1>Home</h1>
    <button onClick={e => props.auth.logout()}>Logout</button>
  </div>
)
