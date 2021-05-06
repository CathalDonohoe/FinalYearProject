import axios from "axios";
import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Redirect } from 'react-router'

export default class Login extends Component {
    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            password: this.password
        }

        axios.post('api/auth/signin', data)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', res.data.username);
                this.setState({
                    loggedIn: true
                });
                window.location.reload(false);
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to={'/'} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <div className="auth-inner">
                    <div className="auth-wrapper">
                        <div className="centered">
                            <img width="50" src="https://i.ibb.co/qmLk76K/icons8-b-64.png" />
                        </div>
                        <br />
                        <h3>Login</h3>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="First name"
                                onChange={e => this.username = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                onChange={e => this.password = e.target.value} />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark btn-block">Login</button>
                        <p className="forgot-password text-right">
                            Forgot <a href="#">password?</a>
                        </p>
                    </div>
                </div>
            </form>
        );
    }
}