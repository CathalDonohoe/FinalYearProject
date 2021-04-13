import React, { Component } from "react";
import axios from "axios";
import NotLoggedIn from "./notLoggedIn.component";
import MyWantedItem from "./myWantedItem.component";

export default class MyWanted extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`api/test/wanted`)
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
        if (isLoggedIn) {
            return this.state.items.map((item) => {
                return <MyWantedItem item={item} />
            })
        }
        else if (!isLoggedIn) {
            <NotLoggedIn />
        }

    }
}