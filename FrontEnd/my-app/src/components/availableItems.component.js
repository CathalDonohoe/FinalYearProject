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

    render() {
        return (
            <ul>
                { this.state.items.map(item => <li>{item.title}</li>)}
            </ul>
        );
    }
}