import React from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MySaved extends React.Component {
    constructor(props) {
        super(props);
        this.saveItem = this.saveItem.bind(this);

        this.state = {
            id: this.props.match.params.id,
            title: '',
            username: '',
            location: '',
            category: '',
            description: '',
            itemSaved: false
        }
    }

    componentDidMount() {
        axios.get('api/test/tutorials/' + this.props.match.params.id)
            .then((response) => {
                this.setState({
                    title: response.data.title,
                    username: response.data.username,
                    location: response.data.location,
                    category: response.data.category,
                    description: response.data.description
                });
            })
            .catch((err) => {
                "Item not in database"
                console.log(err);
            });

        // Check if item is already saved
        axios.get('api/test/savedItems/' + this.props.match.params.id)
            .then((res) => {
                console.log("AFTERGOODGET" + res)
                this.setState({
                    itemSaved: true
                })
            }
            ).catch((err) => {
                "Item not in database"
                this.setState({
                    itemSaved: false
                })
                console.log(err);
            });
    }


    saveItem() {
        // puts state and id to database
        // id and username for saved item
        console.log('saveId ' + this.state.id)
        console.log('savetitle ' + this.state.title)
        console.log('saveUsername ' + this.state.username)
        const item = {
            id: this.state.id,
            title: this.state.title,
            username: localStorage.getItem('user')
        };
        // console.log("id: " +item.id);
        // console.log("title: " +item.title);
        // console.log("username: " +item.username);

        // put item to database
        axios.post(`api/test/savedItems/`, item)
            .then((res) => {
                console.log(res);
                // window.location.reload(false);
                this.setState({ itemSaved: true });
            })
            .catch((err) => {
                console.log('ERROR!' + err)
            })
    }

    render() {
        return (
            <div className='App' >
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
                                    {this.state.itemSaved == false && (
                                        <Button variant="outline-success" className="btn-outline-success" onClick={this.saveItem}>Add to Saved Items</Button>
                                    )}
                                    {this.state.itemSaved == true && (
                                        <Button variant="outline-danger" className="btn-outline-danger" disabled>Item Already Saved</Button>
                                    )}
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </ul>
            </div>
        );
    }
}