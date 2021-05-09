import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import NotLoggedIn from "./notLoggedIn.component"

// Class for user's account page
export default class Account extends Component {
    componentDidMount = () => {
        localStorage.getItem('user');
    }

    render() {
        const textStyle = { color: 'white' };
        let isLoggedIn = false;
        let myUser = localStorage.getItem('user');
        let myToken = localStorage.getItem('token');
        
        if (myToken && myUser != null) {
            isLoggedIn = true;
        }

        return (
            <div className="container">
                {isLoggedIn && (
                    <div className="my-5 p-1 bg-dark rounded box-shadow">
                        <h3 style={textStyle} className="border-bottom border-gray pb-2 mb-0">{myUser}</h3>
                        <div className="media text-muted pt-3">
                            <a href="/myAvailable">
                                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong className="d-block text-gray-dark">My Available Items</strong>
                                    <Button variant="warning">Edit and delete your available items</Button>
                                </p>
                            </a>
                        </div>
                        <div className="my-5 p-1 bg-dark rounded box-shadow">
                            <div className="media text-muted pt-3">
                                <a href="/myWanted">
                                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong className="d-block text-gray-dark">My Wanted Items</strong>
                                        <Button variant="warning">Edit and delete your wanted items</Button>
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="my-5 p-1 bg-dark rounded box-shadow">
                            <div className="media text-muted pt-3">
                                <a href="/mySaved">
                                    <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                        <strong className="d-block text-gray-dark">My Saved Items</strong>
                                        <Button variant="warning">Edit and delete your saved items</Button>
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                )}
                {!isLoggedIn && (
                    <NotLoggedIn />
                )}
            </div>
        )
    }
}