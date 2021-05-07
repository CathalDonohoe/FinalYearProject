import React, { Component } from "react";
import axios from "axios";
import NotLoggedIn from "./notLoggedIn.component";
import MySavedItems from "./mySavedItems.component";

export default class SavedParent extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`api/test/savedItems`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    render() {
        let isLoggedIn = false;

        let myUser = localStorage.getItem('user');
        let myToken = localStorage.getItem('token');

        if (myToken && myUser != null) {
            isLoggedIn = true;
        }
        if (isLoggedIn) {
            return this.state.items.map((item) => {
                return <MySavedItems item={item} />
            })
        }
        else if (!isLoggedIn) {
            return (
                <NotLoggedIn />
            )
        }

    }
}