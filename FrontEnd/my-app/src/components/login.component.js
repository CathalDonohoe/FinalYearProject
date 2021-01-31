import React, { useState } from "react";
import {CheckUser } from './utiltileslogin';
import { useHistory } from "react-router-dom";

export default function Login() {

    const [username, setUserName] = useState(0);
    const [password, setPassword] = useState(0);
    const history = useHistory();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        //send request 
        let details = {
            username: username,
            password: password,
            roles: ["user"]
        };

        await CheckUser(details).then(response => {
            if(response.accessToken){                 
                history.push("/homepage")             
            } 
            else{
                alert("Either the username or password are incorrect")
            }        
        });
    }

        return (
            <form onSubmit = {handleSubmit}>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="auth-inner">
                    <div className="auth-wrapper">
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>User Name</label>
                            <input type="username" className="form-control" placeholder="Enter username" onChange={e => setUserName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>
            </form>
        );
}