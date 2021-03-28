import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
    let history = useHistory(null)
    const submitUser = (e) =>{
        e.preventDefault()
        let username = e.target[0].value
        let password = e.target[1].value
        axios.post("/users/login", {username, password}).then((response) =>{
            localStorage.setItem("token",response.data.token)
            history.push("/")
        })
    }
    return (
        <div className="container py-5">
            <form onSubmit={(e)=>(submitUser(e))}>
                <label htmlFor="username">Username</label>
                <input className="form-control" type="text" name="username" id="username"/>
                <label htmlFor="password">Password</label>
                <input className="form-control" type="password" name="password" id="password"/>
                <button className="btn btn-primary my-2">Submit</button>
            </form>
        </div>
    )
}
