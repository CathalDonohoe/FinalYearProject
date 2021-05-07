import axios from "axios";
import React, { Component } from "react";
import { Redirect } from 'react-router'

export default class SignUp extends Component {
    state = {};

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            email: this.email,
            password: this.password
        }

        axios.post('api/auth/signup', data).then(
            res => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', data.username);
                localStorage.setItem('email', res.data.email);
                this.setState({ loggedIn: true });
                window.location.reload(false);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to={'/login'} />
        }
        return (
            <form onSubmit={this.handleSubmit}>
                <br /><br /><br /><br /><br /><br /><br />
                <div className="auth-inner">
                    <div className="auth-wrapper">
                        <div className="centered">
                            <img width="50" src="https://i.ibb.co/qmLk76K/icons8-b-64.png" />
                        </div>
                        <br />
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="User Name"
                                onChange={e => this.username = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                onChange={e => this.email = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"
                                onChange={e => this.password = e.target.value} />
                        </div>

                        <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered? <a href="#" style={{ color: 'black', fontWeight: 'bold' }}>Sign in</a>
                        </p>
                    </div>
                </div>
            </form>
        );
    }
}