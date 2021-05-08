import React, { Component } from 'react';
import axios from 'axios';

export default class EditAvailable extends Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeimageurl = this.onChangeimageurl.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      id: '',
      title: '',
      category: '',
      description: '',
      imageurl: '',
      location: ''
    };
  }

  componentDidMount() {
    axios.get(`api/test/tutorials` + this.props.match.params.id)
      .then((res) => {
        this.setState({
          title: res.data.title,
          category: res.data.category,
          description: res.data.description,
          imageurl: res.data.imageurl,
          location: res.data.location,
          id: res.data.id
        })
      }).catch((err) => {
        console.log(err);
      });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
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

    const newItem = {
      title: this.state.title,
      category: this.state.category,
      description: this.state.description,
      imageurl: this.state.imageurl,
      location: this.state.location
    };

    axios.put(`api/test/tutorials/` + this.state.id, newItem)
      .then((y) => {
        console.log(y);
      })
      .catch((err) => {
        console.log(err)
      });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  render() {
    return (
      <div className='App'>
        <br /><br /><br /><br />
        <h1>Title: {this.state.title}</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Item Title: </label>
            <input type='text'
              className='form-control'
              value={this.state.title}
              onChange={this.onChangeTitle}></input>
          </div>
          <div className="form-group">
            <label>Item Catagory</label>
            <select onChange={e => this.category = e.target.value}>
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
            <label>Item location</label>
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

          <div className="form-group">
            <input type='submit'
              value='Edit Movie'
              className='btn btn-primary'></input>
          </div>
        </form>
      </div>
    );
  }
}