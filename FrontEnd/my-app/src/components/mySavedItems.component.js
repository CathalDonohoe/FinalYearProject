import axios from "axios";
import React, { Component } from "react";
import Button from 'react-bootstrap/Button'


export default class MySavedItems extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        
        this.state = {
            id: props.item.id,
            title: props.item.title,
            saverUsername: props.item.username
            // location: '',
            // description: '',
            // category: '',
            // postedUsername: ''
        };
    }
    componentDidMount() {
        console.log(this.state.id)
        console.log(this.state.title)
        console.log(this.state.saverUsername)
    }

    deleteItem(id, e) {
        axios.delete(`api/test/savedItems/${id}`)
            .then(res => {
                this.props.ReloadData();
                console.log(res.data);
                const items = this.state.posts.filter(item => item.id !== id);
                //this.setState({ items })
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const textStyle = { color: 'white' };
        let myUser = localStorage.getItem('user');
        let itemHref= 'availableItems/'.concat(this.state.id)
        localStorage.setItem('itemToLoad', this.state.id);

        return (
            <div className="container">
                <ul>
                    {this.state.saverUsername == myUser && (
                        <div className="my-1 p-1 bg-dark rounded box-shadow">
                            <a href={itemHref}><h2 style={textStyle} className="border-bottom border-gray pb-2 mb-0">{this.state.title}</h2></a>
                            <br />
                            <Button variant="danger" onClick={() => this.deleteItem(this.state.id)}>Remove from Saved Items</Button>
                            <br />
                        </div>
                    )}
                </ul>
            </div >
        )
    }
}