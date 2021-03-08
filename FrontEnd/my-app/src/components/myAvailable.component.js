import axios from "axios";
import React, { Component } from "react";
import NotLoggedIn from "./notLoggedIn.component"

export default class MyAvailable extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`api/test/tutorials`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
        localStorage.getItem('user');
    }

    render() {
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
                        <h4 className="border-bottom border-gray pb-2 mb-0">{myUser}</h4>
                        <div className="media text-muted pt-3">
                            <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <strong className="d-block text-gray-dark">My Available Items</strong>
                                
                            </p>
                        </div>
                        <div className="my-5 p-1 bg-dark rounded box-shadow">
                            <div className="media text-muted pt-3">
                                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong className="d-block text-gray-dark">My Wanted Items</strong>
                                    
                                </p>
                            </div>
                        </div>
                        <div className="my-5 p-1 bg-dark rounded box-shadow">
                            <div className="media text-muted pt-3">
                                <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                    <strong className="d-block text-gray-dark">My Saved Items</strong>
                                    
                                </p>
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