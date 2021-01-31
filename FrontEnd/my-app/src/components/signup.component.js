import React, { useState } from "react";
import {SaveUser } from './utilities';
import { useHistory } from "react-router-dom";

export default function SignUp() {

    const [username, setUserName] = useState(0);
    const [email, setEmail] = useState(0);
    const [password, setPassword] = useState(0);
    const history = useHistory();

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        //send request 
        let details = {
            username: username,
            email: email,
            password: password,
            roles: ["user"]
        };

        await SaveUser(details).then(
            history.push("")
        );
    }

    return (
        <form onSubmit = {handleSubmit}>
            <h3>Sign Up</h3>
            <br /><br /><br /><br /><br /><br /><br />
            <div className="auth-inner">
                <div className="auth-wrapper">
                    <div className="form-group">
                        <label>User name</label>
                        <input type="text" className="form-control" placeholder="User Name" onChange={e => setUserName(e.target.value)} />
                    </div>

                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">sign in?</a>
                    </p>

                </div>
            </div>
        </form>
    );
}