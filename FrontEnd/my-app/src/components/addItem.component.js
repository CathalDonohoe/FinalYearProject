import axios from "axios";
import React, { Component } from "react";
import NotLoggedIn from "./notLoggedIn.component"

export default class AddItem extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            title: this.title,
            //itemcatagory: this.itemcatagory,
            description: this.itemdescription
        }

        axios.post('api/test/tutorials', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
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

                                {/* <div className="form-group">
                            <label>Item Catagory</label>
                            <input type="text" className="form-control" placeholder="Item Catagory"
                                onChange={e => this.itemcatagory = e.target.value} />
                        </div> */}

                                <div className="form-group">
                                    <label>Item Description</label>
                                    <input type="text" className="form-control" placeholder="Item Description"
                                        onChange={e => this.itemdescription = e.target.value} />
                                </div>

                                {/* <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" 
                        onChange = {e => this.confirmPassword = e.target.value}/>
                </div> */}

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