import axios from "axios";
import React, { Component } from "react";
import NotLoggedIn from "./notLoggedIn.component"
import { Redirect } from 'react-router'

export default class AddWantedItem extends Component {
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
            category: this.category,
            description: this.itemdescription,
            imageurl: this.image,
            //username: this.username,
            location: this.location
        }

        axios.post('api/test/wanted', data).then(
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

        //this.username = myUser;

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
                                <h2>Add New Wanted Item</h2>
                                <br />
                                <div className="form-group">
                                    <label>Item Name</label>
                                    <input type="text" className="form-control" placeholder="Enter Item's Name" required="true"
                                        onChange={e => this.title = e.target.value} />
                                </div>
                                <br />
                                {/* Dropdown menu */}
                                <div className="form-group">
                                    <label>Item Catagory</label>
                                    <select onChange={e => this.category = e.target.value}>
                                        <option value="Mens Clothing">---</option>
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
                                        onChange={e => this.itemdescription = e.target.value} />
                                </div>
                                <br />
                                <div>
                                    <label>Item image Upload</label>
                                    <input
                                        type='file'
                                        className='form-control'
                                        onChange={this.handleImageChange}
                                        required="true"
                                    ></input>
                                </div>
                                <br /><br />
                                <div className="form-group">
                                    <label>Your location</label>
                                    <select onChange={e => this.location = e.target.value}>
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
                                <br /><br />
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