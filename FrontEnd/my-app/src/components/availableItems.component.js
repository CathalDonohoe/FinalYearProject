import axios from "axios";
import React, { Component } from "react";

export default class availableItems extends Component {

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

    // <div className="panel-body">{this.state.items.map(item => <li>{item.title}<br /></li>)}</div>
    //               <div className="panel-footer">{this.state.items.map(item => <li>{item.description}</li>)}</div>

    render() {
        return (
            <ul>
                <br/><br/><br/><br/>
                {this.state.items.map(function (items, index) {
                    return (
                        <div key={index}>
                            <h1>{items.title}</h1>
                            <p>{items.description}</p>
                            <br/><br/><br/><br/>
                        </div>
                    )
                }
                )}
            </ul>
        );
    }
}