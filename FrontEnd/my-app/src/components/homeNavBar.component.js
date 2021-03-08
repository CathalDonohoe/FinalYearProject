import React, { Component } from "react";

export default class HomeNavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <a className="navbar-brand" href="/homepage">BorrowNearMe</a>
                            <li className="active"><a href="/homepage"><span className="glyphicon glyphicon-home"></span>Home</a></li>
                            <li><a href="availableItems" onClick={() => localStorage.setItem('filter', null)}><span className="glyphicon glyphicon-refresh"></span>Available Items</a></li>
                            <li><a href="/wantedItems"><span className="glyphicon glyphicon-gift"></span>Wanted Items</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-save"></span>Saved Items</a></li>
                            <li><a href="contact"><span className="glyphicon glyphicon-save"></span>Contact</a></li>
                            <li><a href="/account"><span className="glyphicon glyphicon-user"></span> Your account</a></li>
                            <li><a href="/addWantedItem"><span className="glyphicon glyphicon-eye-open"></span> Add new wanted item</a></li>
                            <li><a href="/addItem"><span className="glyphicon glyphicon-send"></span> Add new available item</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}