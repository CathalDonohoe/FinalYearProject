import axios from "axios";
import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

export default class WantedItems extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            name: "React"
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }
    componentDidMount() {
        axios.get(`api/test/wanted`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
    }

    onChangeValue(event) {
        console.log(event.target.value);
        localStorage.setItem('county', event.target.value);
        window.location.reload(false);
    }

    render() {
        let isFiltered = false;
        let filter = localStorage.getItem('county')

        if (filter !== 'null') {
            isFiltered = true;
        }
        else {
            isFiltered = false;
        }

        return (
            <div>
                <div className="available">
                    {isFiltered === true && (
                        <h1>Wanted Items in {filter}</h1>
                    )}
                    {isFiltered === false && (
                        <h1>All Wanted Items</h1>
                    )}
                </div>
                <div className="auth-inner" onChange={this.onChangeValue}>
                    <b>Select Preferred County</b>
                    <br />
                    <input type="radio" value="null" name="county" checked={filter === 'null'} />All Counties
                    <input type="radio" value="Antrim" name="county" checked={filter === 'Antrim'} /> Antrim
                    <input type="radio" value="Armagh" name="county" checked={filter === 'Armagh'} /> Armagh
                    <input type="radio" value="Carlow" name="county" checked={filter === 'Carlow'} /> Carlow
                    <br />
                    <input type="radio" value="Cavan" name="county" checked={filter === 'Cavan'} /> Cavan
                    <input type="radio" value="Clare" name="county" checked={filter === 'Clare'} /> Clare
                    <input type="radio" value="Cork" name="county" checked={filter === 'Cork'} /> Cork
                    <input type="radio" value="Derry (Londonderry)" name="county" checked={filter === 'Derry (Londonderry)'} /> Derry (Londonderry)
                    <br />
                    <input type="radio" value="Donegal" name="county" checked={filter === 'Donegal'} /> Donegal
                    <input type="radio" value="Down" name="county" checked={filter === 'Down'} /> Down
                    <input type="radio" value="North Dublin" name="county" checked={filter === 'North Dublin'} /> North Dublin
                    <input type="radio" value="South Dublin" name="county" checked={filter === 'South Dublin'} /> South Dublin
                    <br />
                    <input type="radio" value="West Dublin" name="county" checked={filter === 'West Dublin'} /> West Dublin
                    <input type="radio" value="East Dublin" name="county" checked={filter === 'East Dublin'} /> East Dublin
                    <input type="radio" value="Central Dublin" name="county" checked={filter === 'Central Dublin'} /> Central Dublin
                    <br />
                    <input type="radio" value="Fermanagh" name="county" checked={filter === 'Fermanagh'} /> Fermanagh
                    <input type="radio" value="Galway" name="county" checked={filter === 'Galway'} /> Galway
                    <input type="radio" value="Kerry" name="county" checked={filter === 'Kerry'} /> Kerry
                    <input type="radio" value="Kildare" name="county" checked={filter === 'Kildare'} /> Kildare
                    <input type="radio" value="Kilkenny" name="county" checked={filter === 'Kilkenny'} /> Kilkenny
                    <br />
                    <input type="radio" value="Laois" name="county" checked={filter === 'Laois'} /> Laois
                    <input type="radio" value="Leitrim" name="county" checked={filter === 'Leitrim'} /> Leitrim
                    <input type="radio" value="Limerick" name="county" checked={filter === 'Limerick'} /> Limerick
                    <input type="radio" value="Longford" name="county" checked={filter === 'Longford'} /> Longford
                    <br />
                    <input type="radio" value="Louth" name="county" checked={filter === 'Louth'} /> Louth
                    <input type="radio" value="Mayo" name="county" checked={filter === 'Mayo'} /> Mayo
                    <input type="radio" value="Meath" name="county" checked={filter === 'Meath'} /> Meath
                    <input type="radio" value="Monaghan" name="county" checked={filter === 'Monaghan'} /> Monaghan
                    <br />
                    <input type="radio" value="Offaly" name="county" checked={filter === 'Offaly'} /> Offaly
                    <input type="radio" value="Roscommon" name="county" checked={filter === 'Roscommon'} /> Roscommon
                    <input type="radio" value="Sligo" name="county" checked={filter === 'Sligo'} /> Sligo
                    <input type="radio" value="Tipperary" name="county" checked={filter === 'Tipperary'} /> Tipperary
                    <br />
                    <input type="radio" value="Tyrone" name="county" checked={filter === 'Tyrone'} /> Tyrone
                    <input type="radio" value="Waterford" name="county" checked={filter === 'Waterford'} /> Waterford
                    <input type="radio" value="Westmeath" name="county" checked={filter === 'Westmeath'} /> Westmeath
                    <input type="radio" value="Wexford" name="county" checked={filter === 'Wexford'} /> Wexford
                    <br />
                    <input type="radio" value="Wicklow" name="county" checked={filter === 'Wicklow'} /> Wicklow
                </div>

                <ul className="grid_list">
                    {this.state.items.map(function (items, index) {
                        return (
                            <div>
                                {isFiltered === true && (
                                    <div key={index}>
                                        {items.location === filter && (
                                            <Card>
                                                <CardImg top width="100%" src={items.imageurl} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle tag="h4"><b>{items.title}</b></CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Category</CardSubtitle>
                                                    <CardText>{items.category}</CardText>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Description</CardSubtitle>
                                                    <CardText>{items.description}.</CardText>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
                                                    <CardText>{items.location}</CardText>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Wanted by</CardSubtitle>
                                                    <CardText>{items.username}</CardText>
                                                    <Button>Details</Button>
                                                </CardBody>
                                            </Card>
                                        )}
                                    </div>
                                )}
                                {isFiltered === false && (
                                    <div key={index}>
                                        <Card>
                                            <CardImg top width="100%" src={items.imageurl} alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle tag="h4"><b>{items.title}</b></CardTitle>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Category</CardSubtitle>
                                                <CardText>{items.category}</CardText>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Description</CardSubtitle>
                                                <CardText>{items.description}.</CardText>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Location</CardSubtitle>
                                                <CardText>{items.location}</CardText>
                                                <CardSubtitle tag="h6" className="mb-2 text-muted">Wanted by</CardSubtitle>
                                                <CardText>{items.username}</CardText>
                                                <Button>Details</Button>
                                            </CardBody>
                                        </Card>
                                    </div>
                                )}
                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
        );
    }
}