import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Navagation extends Component {
    componentDidMount = () => {
        localStorage.getItem('user');
        console.log('inside navigation componentdidmount ' + localStorage.getItem('user'));
    }
    
    logout() {
        console.log("Logout done!!!");
        localStorage.clear();
        window.location.reload(false);
    }

    render() {
        let isLoggedIn = false;
        if(localStorage.getItem('token') && localStorage.getItem('user') != null) {
            isLoggedIn = true;
        }

        let myUser = localStorage.getItem('user');
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <img src="https://i.ibb.co/qmLk76K/icons8-b-64.png" />
                    <Link className="navbar-brand" to={"/homepage"}>BorrowNearME</Link>
                    <div className="collapse navbar-collapse" id="middleNavbar">
                        <Link className="nav-link" to={"/homepage"}>Home</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="rightNavbar">
                        <ul className="navbar-nav ml-auto">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                            {  isLoggedIn && (
                                <li className="nav-item">
                                <Link className="nav-link" to={"/homepage"}>{myUser}</Link>
                                </li>
                            )} 
                             {  !isLoggedIn && (
                                <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Login</Link>
                                </li>
                            )} 
                             {  isLoggedIn && (
                                <li className="nav-item">
                                <Link className="nav-link" onClick={() => this.logout()}>{'Logout'}</Link>
                            </li>
                            )} 
                             {  !isLoggedIn && (
                                <li className="nav-item">
                                <Link className="nav-link" to={"/signup"}>Sign up</Link>
                            </li>
                            )} 
                            
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}