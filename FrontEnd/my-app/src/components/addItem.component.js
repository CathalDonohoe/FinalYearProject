import axios from "axios";
import React, { Component } from "react";

export default class AddItem extends Component {

    handleSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.username,
            email: this.email,
            itemname: this.itemname,
            itemcatagory: this.itemcatagory,
            itemdescription: this.itemdescription,

            // confirmPassword: this.confirmPassword
        }

        axios.post('api/auth/signup', data).then(
            res => {
                console.log(res);
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <br /><br /><br /><br /><br /><br /><br />
                <div className="auth-inner">
                    <div className="auth-wrapper">
                        <h3>Add Item</h3>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="User Name"
                                onChange={e => this.username = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email"
                                onChange={e => this.email = e.target.value} />
                        </div>

                        <div className="form-group">
                            <label>Item Name</label>
                            <input type="text" className="form-control" placeholder="Enter Item's Name"
                                onChange={e => this.itemname = e.target.value} />
                        </div>

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
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Confirm password" 
                        onChange = {e => this.confirmPassword = e.target.value}/>
                </div> */}

                        <button type="submit" className="btn btn-dark btn-block">Add Item</button>
                    </div>
                </div>
            </form>
        );
    }
}