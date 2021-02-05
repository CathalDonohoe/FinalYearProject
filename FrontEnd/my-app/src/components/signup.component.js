import axios from "axios";
import React, { Component } from "react";

export default class SignUp extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            email: this.email,
            password: this.password,
            // confirmPassword: this.confirmPassword
        }

        axios.post('http://localhost:8081/api/auth/signup', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br /><br /><br /><br /><br /><br /><br />
                <div className="auth-inner">
                    <div className="auth-wrapper">
                        <h3>Sign Up</h3>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="First name"
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

                        {/* <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" 
                        onChange = {e => this.confirmPassword = e.target.value}/>
                </div> */}

                        <button type="submit" className="btn btn-dark btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered? <a href="#">Sign in</a>
                        </p>
                    </div>
                </div>
            </form>
        );
    }
}