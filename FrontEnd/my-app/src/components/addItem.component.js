import axios from "axios";
import React, { Component } from "react";
import NotLoggedIn from "./notLoggedIn.component"
import { Redirect } from 'react-router'
import { newExpression } from '@babel/types';

export default class AddItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Base64Image: ''
        };

        this.handleImageChange = this.handleImageChange.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.title,
            category: this.itemcategory,
            description: this.itemdescription,
            imageurl: this.image,
            location: this.location
        }

        axios.post('api/test/tutorials', data).then(
            res => {
                console.log(res);
                this.setState({
                    itemAdded: true
                });
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }

    handleImageChange(e) {
        alert(e.target.files[0]);
        this.getBase64(e.target.files[0], (base64) => {
            this.setState({ Base64Image: base64 });
            this.image = base64;
        })
    }

    componentDidMount = () => {
        localStorage.getItem('user');
    }

    render() {
        let isLoggedIn = false;
        let myUser = localStorage.getItem('user');
        let myToken = localStorage.getItem('token');

        if (myToken && myUser != null) {
            isLoggedIn = true;
        }

        if (this.state.itemAdded) {
            return <Redirect to={'/'} />
        }

        return (
            <div>
                {isLoggedIn && (
                    <form onSubmit={this.handleSubmit}>
                        <br /><br /><br /><br /><br /><br /><br />
                        <div className="auth-inner">
                            <div className="auth-wrapper">
                                <h3>Add Item</h3>
                                <div className="form-group">
                                    <label>Item Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Item's Name"
                                        onChange={e => this.title = e.target.value} />
                                </div>

                                {/* Dropdown menu */}
                                <div className="form-group">
                                    <label>Item Catagory</label>
                                    <input type="text" className="form-control" placeholder="Item Catagory"
                                        onChange={e => this.itemcatagory = e.target.value} />
                                </div>

                                <div className="form-group">
                                    <label>Item Description</label>
                                    <input type="text" className="form-control" placeholder="Item Description"
                                        onChange={e => this.itemdescription = e.target.value} />
                                </div>

                                {/* <div className="form-group">
                                    <label>Item image</label>
                                    <input type="text" className="form-control" placeholder="Item image"
                                        onChange={e => this.image = e.target.value} />
                                </div> */}

                                {/* <div className='form-group'>
                                    <label>Item image Url</label>
                                    <textarea
                                        row='3'
                                        className='form-control'
                                        value={this.state.Poster}
                                        onChange={this.handleMoviePosterChange}
                                    ></textarea>
                                </div> */}
                                <div>
                                    <label>Item image Upload</label>
                                    <input
                                        type='file'
                                        className='form-control'
                                        onChange={this.handleImageChange}
                                    ></input>
                                </div>

                                <div className="form-group">
                                    <label>Item location</label>
                                    <input type="text" className="form-control" placeholder="Item location"
                                        onChange={e => this.location = e.target.value} />
                                </div>

                                <button type="submit" className="btn btn-dark btn-block">Add Item</button>
                            </div>
                        </div>
                    </form>
                )}

                {!isLoggedIn && (
                    <NotLoggedIn />
                )}

            </div>
        );
    }
}