import axios from "axios";
import React, { Component } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default class MyAvailableItem extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeimageurl = this.onChangeimageurl.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);

        this.state = {
            show: false,
            id: '',
            title: props.item.title,
            category: props.item.category,
            description: props.item.description,
            imageurl: props.item.imageurl,
            location: props.item.location,
            username: props.item.username
        };
    }

    deleteItem(id, e) {
        axios.delete(`api/test/tutorials/${id}`)
            .then(res => {
                console.log(res.data);
                window.location.reload(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // Show popup form
    handleShow() {
        this.setState({ show: true });
    }

    // Close popup form
    handleClose() {
        this.setState({ show: false });
    }

    onChangeTitle(e) {
        this.setState({ title: e.target.value });
    }

    onChangeCategory(e) {
        this.setState({ category: e.target.value });
    }

    onChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    onChangeimageurl(e) {
        this.setState({ imageurl: e.target.value });
    }

    onChangeLocation(e) {
        this.setState({ location: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log('Item: ' + this.state.title + ' '
            + this.state.category + ' ' + this.state.description + ' '
            + /*this.state.imageurl + ' ' +*/ this.state.location);

        const newItem = {
            title: this.state.title,
            category: this.state.category,
            description: this.state.description,
            imageurl: this.state.imageurl,
            location: this.state.location,
            username: this.state.username
        };

        axios.put(`api/test/tutorials/` + this.props.item.id, newItem)
            .then((y) => {
                console.log(y);
                this.setState({ show: false });
                window.location.reload(false);
            })
            .catch((err) => {
                console.log('ERROR!' + err)
            });
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
                            <img width="200px" height="200px" src={this.props.item.imageurl} alt="Item image not found!" />
                            <p style={textStyle}>{this.props.item.description}</p>
                            <Button variant="danger" onClick={() => this.deleteItem(this.props.item.id)}>Delete</Button>
                            <br />
                            <Button variant="primary" onClick={this.handleShow}>
                                Edit
                            </Button>

                             {/* EDIT ITEM //
                             This Modal is only shown when show state is true */}
                            <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title>{this.props.item.title}</Modal.Title>
                                </Modal.Header>
                                <Modal.Footer>
                                    <div className='App'>
                                        <form onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <label>Item Title: </label>
                                                <input type='text'
                                                    className='form-control'
                                                    placeholder={this.props.item.title}
                                                    value={this.state.title}
                                                    onChange={this.onChangeTitle}></input>
                                            </div>
                                            <div className="form-group">
                                                <label>Item Category</label>
                                                <select defaultValue={this.props.item.category} onChange={this.onChangeCategory}>
                                                    <option value="OtherItems">---</option>
                                                    <option value="Mens Clothing">Men's Clothing</option>
                                                    <option value="Womens Clothing">Women's Clothing</option>
                                                    <option value="Childrens Clothing">Children's Clothing</option>

                                                    <option value="Sports Balls">Sports Balls</option>
                                                    <option value="Sports Sticks/Bats/Clubs">Sports Sticks/Bats/Clubs</option>
                                                    <option value="Sports Misc">Other Sports equipment</option>

                                                    <option value="Electronic Devices">Electronic Devices</option>
                                                    <option value="Electronic Wires">Electronic Wires/Chargers</option>
                                                    <option value="Electronic Misc">Other Electronics equipment</option>

                                                    <option value="Ladders">Ladders</option>
                                                    <option value="Hand Tools">Hand Tools</option>
                                                    <option value="Power Tools">Power Tools</option>
                                                    <option value="Gardening Tools">Gardening Tools</option>
                                                    <option value="Painting Tools">Painting Tools</option>
                                                    <option value="Fastener Tools">Fastener Tools</option>

                                                    <option value="OtherItems">Other Items</option>
                                                </select>
                                            </div>
                                            <br />
                                            <div className="form-group">
                                                <label>Item Description</label>
                                                <input type="text" className="form-control" placeholder="Item Description"
                                                    defaultValue={this.props.item.description}
                                                    onChange={this.onChangeDescription} />
                                            </div>
                                            <br />
                                            <div>
                                                <label>Item image Upload</label>
                                                <input
                                                    type='file'
                                                    className='form-control'
                                                    placeholder={this.props.item.imageurl}
                                                    onChange={this.onChangeimageurl}
                                                ></input>
                                            </div>
                                            <br /><br />
                                            <div className="form-group">
                                                <label>Item location</label>
                                                <select defaultValue={this.props.item.location} onChange={this.onChangeLocation}>
                                                    <option value="Mens Clothing">---</option>
                                                    <option value="Antrim">Antrim</option>
                                                    <option value="Armagh">Armagh</option>
                                                    <option value="Carlow">Carlow</option>
                                                    <option value="Cavan">Cavan</option>
                                                    <option value="Clare">Clare</option>
                                                    <option value="Cork">Cork</option>
                                                    <option value="Derry (Londonderry)">Derry (Londonderry)</option>
                                                    <option value="Donegal">Donegal</option>
                                                    <option value="Down">Down</option>
                                                    <option value="North Dublin">North Dublin</option>
                                                    <option value="South Dublin">South Dublin</option>
                                                    <option value="West Dublin">West Dublin</option>
                                                    <option value="East Dublin">East Dublin</option>
                                                    <option value="Central Dublin">Central Dublin</option>
                                                    <option value="Fermanagh">Fermanagh</option>
                                                    <option value="Galway">Galway</option>
                                                    <option value="Kerry">Kerry</option>
                                                    <option value="Kildare">Kildare</option>
                                                    <option value="Kilkenny">Kilkenny</option>
                                                    <option value="Laois">Laois</option>
                                                    <option value="Leitrim">Leitrim</option>
                                                    <option value="Limerick">Limerick</option>
                                                    <option value="Longford">Longford</option>
                                                    <option value="Louth">Louth</option>
                                                    <option value="Mayo">Mayo</option>
                                                    <option value="Meath">Meath</option>
                                                    <option value="Monaghan">Monaghan</option>
                                                    <option value="Offaly">Offaly</option>
                                                    <option value="Roscommon">Roscommon</option>
                                                    <option value="Sligo">Sligo</option>
                                                    <option value="Tipperary">Tipperary</option>
                                                    <option value="Tyrone">Tyrone</option>
                                                    <option value="Waterford">Waterford</option>
                                                    <option value="Westmeath">Westmeath</option>
                                                    <option value="Wexford">Wexford</option>
                                                    <option value="Wicklow">Wicklow</option>
                                                </select>
                                            </div>

                                            <div className="form-group">
                                                <input type='submit'
                                                    value='Edit Item'
                                                    className='btn btn-primary'>
                                                </input>
                                            </div>
                                        </form>
                                    </div>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    )}
                </ul>
            </div>
        )
    }
}