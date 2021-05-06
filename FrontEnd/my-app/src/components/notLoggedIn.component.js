import React, { Component } from "react";

export default class NotLoggedIn extends Component {
    render() {
        return (
            <div className="auth-inner">
                <div className="centered">
                    <img width="50" src="https://i.ibb.co/qmLk76K/icons8-b-64.png" />
                </div>
                <br />
                <h1>You must be logged in to access this page!</h1>
                <button className="btn btn-dark"><a href="/login">Log in</a></button>
                <br /><br />
                <button className="btn btn-dark"><a href="/signup">Sign up</a></button>
            </div>
        );
    }
}