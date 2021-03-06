import React from 'react';
import axios from 'axios';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import EmailOut from './emailOut.component';
import { Redirect } from 'react-router'
import NotLoggedIn from './notLoggedIn.component';

export default class ViewAvailable extends React.Component {
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
            imageurl: '',
            email: '',
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
                    imageurl: response.data.imageurl,
                    email: response.data.email,
                    description: response.data.description
                });
                // sets items for sending email
                localStorage.setItem("NameOfUser", this.state.username);
                localStorage.setItem("ItemOfUser", this.state.title);
            })
            .catch((err) => {
                // Item not in database
                console.log(err);
            });

        // Check if item is already saved
        axios.get('api/test/savedItems/' + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    itemSaved: true
                })
            }
            ).catch((err) => {
                // Item not in database
                this.setState({
                    itemSaved: false
                })
                console.log(err);
            });
    }

    saveItem() {
        // puts item data to database for loading later
        const item = {
            id: this.state.id,
            title: this.state.title,
            username: localStorage.getItem('user')
        };

        // put item to database
        axios.post(`api/test/savedItems/`, item)
            .then((res) => {
                console.log(res);
                this.setState({ itemSaved: true });
            })
            .catch((err) => {
                console.log('ERROR!' + err)
            })
    }

    render() {
        if (localStorage.getItem("EmailSent") === 'true') {
            localStorage.setItem("EmailSent", false);
            return <Redirect to={'/homepage'} />
        }

        return (
            <div className='App' >
                <ul>
                    <div className="centered"> 
                        <div>
                            {/* Displays the item's details */}
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
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Posted by</CardSubtitle>
                                    <CardText>{this.state.username}</CardText>
                                    {this.state.itemSaved == false && (
                                        <Button variant="outline-success" className="btn-outline-success" onClick={this.saveItem}>Add to Saved Items</Button>
                                    )}
                                    {this.state.itemSaved == true && (
                                        <Button variant="outline-danger" className="btn-outline-danger" disabled>Item Already Saved</Button>
                                    )}
                                </CardBody>
                            </Card>
                            {/* Allows user to contact item owner, if signed in*/}
                            {localStorage.getItem('user') != null &&
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h4">Contact <b>{this.state.username}</b></CardTitle>
                                        <EmailOut />
                                    </CardBody>
                                </Card>
                            }
                            {localStorage.getItem('user') == null &&
                                <NotLoggedIn/>
                            }
                        </div>
                    </div>
                </ul>
            </div>
        );
    }
}