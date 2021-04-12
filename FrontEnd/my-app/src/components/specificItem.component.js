import React from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class SpecificItem extends React.Component {

    constructor() {
        super();

        this.state = {
            title: '',
            category: '',
            description: '',
            imageurl: '',
            location: '',
            username: ''
        }
    }

    componentDidMount() {
        console.log("load " + this.props.match.params.id);

        axios.get('api/test/tutorials/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    title: response.data.title,
                    category: response.data.category,
                    description: response.data.description,
                    imageurl: response.data.imageurl,
                    location: response.data.location,
                    username: response.data.username
                    
                })
                console.log(this.state.username);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className='App'>
                <ul className="grid_list">
                    <div>
                        <div>
                            <Card>
                                <CardImg top width="100%" src={this.state.imageurl} alt="Card image cap" />
                                <CardBody>
                                    <CardTitle tag="h4"><b>{this.state.title}</b></CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Category</CardSubtitle>
                                    <CardText>{this.state.category}</CardText>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Description</CardSubtitle>
                                    <CardText>{this.state.description}.</CardText>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
                                    <CardText>{this.state.location}</CardText>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Wanted by</CardSubtitle>
                                    <CardText>{this.state.username}</CardText>
                                    <Button>Details</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </ul>
            </div>
        );
    }
}