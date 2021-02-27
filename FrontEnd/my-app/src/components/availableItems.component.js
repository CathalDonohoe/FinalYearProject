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

    render() {
        let isFiltered = false;
        let filter = localStorage.getItem('filter')

        if(filter != null)
        {
            isFiltered = true;
        }

        return (
            <div>
                <ul className="grid_list">
                    {this.state.items.map(function (items, index) {
                        return (
                            <div key={index}>
                                {console.log(items.category)}
                                {console.log(filter)}
                                {items.category == filter && (
                                <Card>
                                    <CardImg top width="100%" src={items.imageurl} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle tag="h4"><b>{items.title}</b></CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Category</CardSubtitle>
                                        <CardText>{items.category}</CardText>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Description</CardSubtitle>
                                        <CardText>{items.description}.</CardText>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
                                        <CardText>{items.location}</CardText>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">Posted by</CardSubtitle>
                                        <CardText>{items.username}</CardText>
                                        <Button>Details</Button>
                                    </CardBody>
                                </Card>
                                )}
                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
        );
    }
}