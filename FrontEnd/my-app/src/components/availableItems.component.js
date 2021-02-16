import axios from "axios";
import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
            <div>
                <br /><br /><br /><br />
                <ul className="grid_list">
                    {this.state.items.map(function (items, index) {
                        return (
                            <div key={index}>
                                <Card>
                                    <CardImg top width="100%" src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2020%2F0319%2Fr681030_1296x729_16%2D9.jpg" alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h5">{items.title}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Item description</CardSubtitle>
                                        <CardText>{items.description}.</CardText>
                                        <Button>Details</Button>
                                    </CardBody>
                                </Card>

                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
        );
    }
}