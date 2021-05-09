import React, { Component } from "react";

// Navigation bar located on the left side of the homepage
export default class HomeNavBar extends Component {

    render() {
        return (
            <nav className="navbar navbar-inverse">
                <img width="100" src="https://i.ibb.co/qmLk76K/icons8-b-64.png" alt="logo"/><br/>
                <div className="centered">      
                    <ul className="nav navbar-nav">
                            <a className="navbar-brand" href="/homepage">BorrowNearMe</a>
                            <li className="active"><a href="/homepage"><span className="glyphicon glyphicon-home"></span>Home</a></li><br/>
                            <li><a href="/availableItems" onClick={() => localStorage.setItem('filter', null)}><span className="glyphicon glyphicon-refresh"></span>Available Items</a></li><br/>
                            <li><a href="/wantedItems"><span className="glyphicon glyphicon-gift"></span>Wanted Items</a></li><br/>
                            <li><a href="/mySaved"><span className="glyphicon glyphicon-save"></span>Saved Items</a></li><br/>
                            <li><a href="/contact"><span className="glyphicon glyphicon-save"></span>Contact</a></li><br/>
                            <li><a href="/account"><span className="glyphicon glyphicon-user"></span> Your account</a></li><br/>
                            <li><a href="/addWantedItem"><span className="glyphicon glyphicon-eye-open"></span> Add new wanted item</a></li><br/>
                            <li><a href="/addItem"><span className="glyphicon glyphicon-send"></span> Add new available item</a></li>
                        </ul>
                </div>
                <br />
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        
                    </div>
                </div>
            </nav>
        )
    }
}