import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class NotLoggedIn extends Component {
    render() {
        return (
            <div className="auth-inner">
                <div className="centered">
                    <img width="50" src="https://i.ibb.co/qmLk76K/icons8-b-64.png" />
                </div>
                <br />
                <h1>You must be logged in to use this feature!</h1>
                
                <Link to="/login" className="btn btn-dark">Log in</Link>
                <br /><br />
                <Link to="/signup" className="btn btn-dark">Sign up</Link>
            </div>
        );
    }
}