import React, { Component } from "react";
import axios from "axios";
import MyAvailableItem from "./myAvailableItem.component";
import NotLoggedIn from "./notLoggedIn.component";

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
                return <MyAvailableItem item={item} />
            })
        }
        else if (!isLoggedIn) {
            <NotLoggedIn />
        }

    }
}