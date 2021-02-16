import React, { Component } from "react";
import mensImg from "../images/manInSuit.jpg";
import womensImg from "../images/womanSuit.jpg";
import childsImg from "../images/childClothes.jpg";
import ballImg from "../images/ball.jpg"
import sportsImg from "../images/sports.jpg";
import golfClubImg from "../images/golfClubs.jpg";
import otherEquipmentImg from "../images/sportMisc.jpg"
import electronicsImg from "../images/electronics.jpg";
// import booksImg from "../images/books.jpg";
// import toolsImg from "../images/tools.png";
import '../App.css';
import axios from "axios";
import HomeNavBar from "./homeNavBar.component"

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
         <HomeNavBar/>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">Borrow Clothing</div>
                  <div className="panel-body"><img src={mensImg} className="img-responsive" alt="Image" /></div>
                  <div className="panel-footer">Men's</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">Borrow Clothing</div>
                  <div className="panel-body"><img src={womensImg} className="img-responsive" alt="Image" /></div>
                  <div className="panel-footer">Women's</div>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="panel panel-primary">
                  <div className="panel-heading">Borrow Clothing</div>
                  <div className="panel-body"><img src={childsImg} className="img-responsive" alt="Image" /></div>
                  <div className="panel-footer">Children's</div>
                </div>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="panel panel-danger">
                      <div className="panel-heading">Borrow Sports Items</div>
                      <div className="panel-body"><img src={ballImg} width="350px" height="150" className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Balls</div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-danger">
                      <div className="panel-heading">Borrow Sports Items</div>
                      <div className="panel-body"><img src={golfClubImg} width="350px" height="150" className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Sticks/Bats/Clubs</div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-danger">
                      <div className="panel-heading">Borrow Sports Items</div>
                      <div className="panel-body"><img src={otherEquipmentImg} width="350" height="150" className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Other equipment</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />

              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="panel panel-success">
                      <div className="panel-heading">Borrow Electronics</div>
                      <div className="panel-body"><img src={electronicsImg} width="350" height="150" className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Devices</div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-success">
                      <div className="panel-heading">Borrow Electronics</div>
                      <div className="panel-body"><img src={electronicsImg} width="350" height="150" className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Wires/Chargers</div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="panel panel-success">
                      <div className="panel-heading">Borrow Electronics</div>
                      <div className="panel-body"><img width="350" height="150" src={electronicsImg} className="img-responsive" alt="Image" /></div>
                      <div className="panel-footer">Miscellaneous</div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col-sm-4">
                        <div className="panel panel-primary">
                          <div className="panel-heading">Borrow Tools</div>
                          <div className="panel-body"><img width="350" height="150" src={mensImg} className="img-responsive" alt="Image" /></div>
                          <div className="panel-footer">Ladders</div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="panel panel-primary">
                        <div className="panel-heading">Borrow Tools</div>
                          <div className="panel-body"><img width="350" height="150" src={sportsImg} className="img-responsive" alt="Image" /></div>
                          <div className="panel-footer">Hand tools</div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="panel panel-primary">
                        <div className="panel-heading">Borrow Tools</div>
                          <div className="panel-body"><img width="350" height="150" src={electronicsImg} className="img-responsive" alt="Image" /></div>
                          <div className="panel-footer">Power Tools</div>
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
                          <div className="panel-heading">Borrow Tools</div>
                          <div className="panel-body"><img width="350" height="150" src={mensImg} className="img-responsive" alt="Image" /></div>
                          <div className="panel-footer">Gardening Tools</div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="panel panel-primary">
                        <div className="panel-heading">Borrow Tools</div>
                          <div className="panel-body"><img src={sportsImg} width="350px" height="150" className="img-responsive" alt="Image" /></div>
                          <div className="panel-footer">Painting Tools</div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="panel panel-primary">
                        <div className="panel-heading">Borrow Tools</div>
                          <div className="panel-body"><img src={electronicsImg} width="350px" height="150" className="img-responsive" alt="Image" /></div>
                          <div className="panel-footer">Fastener tools</div>
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