import axios from "axios";
import React, { Component } from "react";
import NotLoggedIn from "./notLoggedIn.component"
import Button from 'react-bootstrap/Button'

export default class MyAvailableItem extends Component {
    constructor(props) {
        super(props);
        this.delItem = this.delItem.bind(this);
    }

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

    deleteItem(id, e) {
        axios.delete(`api/test/tutorials/${id}`)
            .then(res => {
                this.props.ReloadData();

                console.log(res);
                console.log(res.data);
                const items = this.state.posts.filter(item => item.id !== id);
                //this.setState({ items })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // for Testing
    delItem(e) {
        console.log('in deleteItem');
    }

    render() {
        const textStyle = { color: 'white' };
        let myUser = localStorage.getItem('user');

        return (
            <div className="container">
                <ul>
                    {this.props.item.username == myUser && (
                        <div className="my-1 p-1 bg-dark rounded box-shadow">
                            <h4 style={textStyle} className="border-bottom border-gray pb-2 mb-0">{this.props.item.title}</h4>
                            <br />
                            <img width="200px" height="200px" src={this.props.item.imageurl} alt="Problem loading item image!" />
                            <p style={textStyle}>{this.props.item.description}</p>
                            <Button variant="danger" onClick={() => this.deleteItem(this.props.item.id)}>Delete</Button>
                            <br/>
                            <Button variant="warning" onClick={() =>console.log(this.props.item.id)}>Edit</Button>
                        </div>
                    )}
                    </ul>
            </div>
        )
    }
}