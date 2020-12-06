import React, { } from "react";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import clothingImg from "../images/clothing.jpg";
import sportsImg from "../images/sports.jpg";
import electronicsImg from "../images/electronics.jpg";
import booksImg from "../images/books.jpg";
import toolsImg from "../images/tools.png";
import '../App.css';

class HomePage extends React.Component {

  render() {
    return (
        <html>
            <head>
            <title>HomePage</title>
            <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"/>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  </head>
  <body>
      <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="/homepage">BorrowNearMe</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/homepage"><span class="glyphicon glyphicon-home"></span>Home</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-refresh"></span>Available Items</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-gift"></span>Wanted Items</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-save"></span>Saved Items</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-save"></span>Contact</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-user"></span> Your Account</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-eye-open"></span> Add new wanted item</a></li>
        <li><a href="#"><span class="glyphicon glyphicon-send"></span> Add new  item for trade</a></li>
      </ul>
    </div>
  </div>
</nav>
<div class="container">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={clothingImg} width="220px" class="img-responsive" alt="Image"/></div>
        <div class="panel-footer">Borrow Clothes</div>
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-danger">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={sportsImg} width="220px" class="img-responsive" alt="Image"/></div>
        <div class="panel-footer">Borrow Sports Items</div>
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-success">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={electronicsImg} width="220px" class="img-responsive" alt="Image"/></div>
        <div class="panel-footer">Borrow Electronics</div>
      </div>
    </div>
    <div class="container">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={clothingImg} width="220px" class="img-responsive" alt="Image"/></div>
        <div class="panel-footer">Borrow Clothes</div>
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-danger">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={sportsImg} width="220px" class="img-responsive" alt="Image"/></div>
        <div class="panel-footer">Borrow Sports Items</div>
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-success">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={electronicsImg} width="220px" class="img-responsive" alt="Image"/></div>
        <div class="panel-footer">Borrow Electronics</div>
      </div>
    </div>
  </div>
</div>
<br/>
<div class="container">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">Borrow Clothes</div>
        <div class="panel-body"><img src={clothingImg} width="220px" class="img-responsive" alt="Image"/></div>
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-danger">
        <div class="panel-heading">Borrow Sports Items</div>
        <div class="panel-body"><img src={sportsImg} width="220px" class="img-responsive" alt="Image"/></div>
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-success">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={electronicsImg} width="220px" class="img-responsive" alt="Image"/></div>
      </div>
    </div>
    <div class="container">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={clothingImg} width="220px" class="img-responsive" alt="Image"/></div>
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-danger">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={sportsImg} width="220px" class="img-responsive" alt="Image"/></div>
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-success">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={electronicsImg} width="220px" class="img-responsive" alt="Image"/></div>
      </div>
    </div>
  </div>
</div>
<br/>
  </div>
</div>
<br/>
<div class="container">    
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={clothingImg} width="220px" class="img-responsive" alt="Image"/></div>
        
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-danger">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={sportsImg} width="220px" class="img-responsive" alt="Image"/></div>
        
      </div>
    </div>
    <div class="col-sm-4"> 
      <div class="panel panel-success">
        <div class="panel-heading">Borrow Near Me</div>
        <div class="panel-body"><img src={electronicsImg} width="220px" class="img-responsive" alt="Image"/></div>
      </div>
    </div>
<footer class="container-fluid text-center">
  <p>Online Store Copyright</p>  
  <form class="form-inline">Get deals:
    <input type="email" class="form-control" size="50" placeholder="Email Address"/>
    <button type="button" class="btn btn-danger">Sign Up</button>
  </form>
</footer>

  </div>
</div>
<br/>
  </div>
</div>
<br/>






</body>
</html>
    )
}
}

export default HomePage;
