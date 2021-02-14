import React, { Component } from "react";
import clothingImg from "../images/clothing.jpg";
import sportsImg from "../images/sports.jpg";
import electronicsImg from "../images/electronics.jpg";
// import booksImg from "../images/books.jpg";
// import toolsImg from "../images/tools.png";
import '../App.css';
import axios from "axios";

export default class Homepage extends Component {
  componentDidMount() {
    const config = {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    };

    axios.get('/api/auth/user', config).then(
      res => {
        console.log(res);
        this.setState({
          user: res.data
        });
      },
      err => {
        console.log(err);
      }
    );
  }

  render() {
    return (
      <html>
        <head>
          <title>HomePage</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
          <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        </head>
        <body>
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
                  <li><a href="#"><span className="glyphicon glyphicon-refresh"></span>Available Items</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-gift"></span>Wanted Items</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-save"></span>Saved Items</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-save"></span>Contact</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-user"></span> Your Account</a></li>
                  <li className="active"><a href="/addItem"><span className="glyphicon glyphicon-eye-open"></span> Add new wanted item</a></li>
                  <li><a href="#"><span className="glyphicon glyphicon-send"></span> Add new  item for trade</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">Borrow Near Me</div>
                  <div className="panel-body"><img src={clothingImg} width="220px" className="img-responsive" alt="Image" /></div>
                  <div className="panel-footer">Borrow Clothes</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-danger">
                  <div className="panel-heading">Borrow Near Me</div>
                  <div className="panel-body"><img src={sportsImg} width="220px" className="img-responsive" alt="Image" /></div>
                  <div className="panel-footer">Borrow Sports Items</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-success">
                  <div className="panel-heading">Borrow Near Me</div>
                  <div className="panel-body"><img src={electronicsImg} width="220px" className="img-responsive" alt="Image" /></div>
                  <div className="panel-footer">Borrow Electronics</div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="panel panel-primary">
                      <div className="panel-heading">Borrow Near Me</div>
                      <div className="panel-body"><img src={clothingImg} width="220px" className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Borrow Clothes</div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-danger">
                      <div className="panel-heading">Borrow Near Me</div>
                      <div className="panel-body"><img src={sportsImg} width="220px" className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Borrow Sports Items</div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-success">
                      <div className="panel-heading">Borrow Near Me</div>
                      <div className="panel-body"><img src={electronicsImg} width="220px" className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Borrow Electronics</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="panel panel-primary">
                      <div className="panel-heading">Borrow Clothes</div>
                      <div className="panel-body"><img src={clothingImg} width="220px" className="img-responsive" alt="Image" /></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-danger">
                      <div className="panel-heading">Borrow Sports Items</div>
                      <div className="panel-body"><img src={sportsImg} width="220px" className="img-responsive" alt="Image" /></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-success">
                      <div className="panel-heading">Borrow Near Me</div>
                      <div className="panel-body"><img src={electronicsImg} width="220px" className="img-responsive" alt="Image" /></div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="panel panel-primary">
                          <div className="panel-heading">Borrow Near Me</div>
                          <div className="panel-body"><img src={clothingImg} width="220px" className="img-responsive" alt="Image" /></div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="panel panel-danger">
                          <div className="panel-heading">Borrow Near Me</div>
                          <div className="panel-body"><img src={sportsImg} width="220px" className="img-responsive" alt="Image" /></div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="panel panel-success">
                          <div className="panel-heading">Borrow Near Me</div>
                          <div className="panel-body"><img src={electronicsImg} width="220px" className="img-responsive" alt="Image" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
              <br />

              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="panel panel-primary">
                      <div className="panel-heading">Borrow Near Me</div>
                      <div className="panel-body"><img src={clothingImg} width="220px" className="img-responsive" alt="Image" /></div>

                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-danger">
                      <div className="panel-heading">Borrow Near Me</div>
                      <div className="panel-body"><img src={sportsImg} width="220px" className="img-responsive" alt="Image" /></div>

                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-success">
                      <div className="panel-heading">Borrow Near Me</div>
                      <div className="panel-body"><img src={electronicsImg} width="220px" className="img-responsive" alt="Image" /></div>
                    </div>
                  </div>
                  <footer className="container-fluid text-center">
                    <p>Online Store Copyright</p>
                    <form className="form-inline">Get deals:
    <input type="email" className="form-control" size="50" placeholder="Email Address" />
                      <button type="button" className="btn btn-danger">Sign Up</button>
                    </form>
                  </footer>
                </div>
              </div>
              <br />
            </div>
          </div>
          <br />
        </body>
      </html>
    )
  }
}