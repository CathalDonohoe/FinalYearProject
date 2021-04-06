// import axios from "axios";
// import React, { Component } from "react";
// import NotLoggedIn from "./notLoggedIn.component"
// import Button from 'react-bootstrap/Button'

// export default class MyWanted extends Component {
//     state = {
//         items: []
//     }

//     componentDidMount() {
//         axios.get(`api/test/wanted`)
//             .then(res => {
//                 const items = res.data;
//                 this.setState({ items });
//             })
//         localStorage.getItem('user');
//     }

//     render() {
//         const textStyle = { color: 'white' };

//         let isLoggedIn = false;
//         let myUser = localStorage.getItem('user');
//         let myToken = localStorage.getItem('token');

//         if (myToken && myUser != null) {
//             isLoggedIn = true;
//         }
//         return (
//             <div className="container">
//                 {isLoggedIn && (
//                     <ul >
//                         {this.state.items.map(function (items, index) {
//                             return (
//                                 <div>
//                                     <div key={index}>
//                                         {items.username == myUser && (
//                                             <div className="my-1 p-1 bg-dark rounded box-shadow">
//                                                 <h4 style={textStyle} className="border-bottom border-gray pb-2 mb-0">{items.title}</h4>
//                                                 <br />
//                                                 <img width="200px" height="200px" src={items.imageurl} alt="Problem loading item image!" />
//                                                 <p style={textStyle}>{items.description}</p>
//                                                 <Button variant="warning">Edit</Button>
//                                                 <Button variant="danger">Delete</Button>
//                                             </div>

//                                         )}
//                                     </div>
//                                 </div>
//                             )
//                         }
//                         )}
//                     </ul>
//                 )}

//                 {!isLoggedIn && (
//                     <NotLoggedIn />
//                 )}
//             </div>
//         )
//     }
// }

import React, { Component } from "react";
import axios from "axios";
import MyAvailableItem from "./myAvailableItem.component";
import NotLoggedIn from "./notLoggedIn.component";
import MyWantedItem from "./myWantedItem.component";

export default class MyWanted extends Component {
    state = {
        items: []
    }

    componentDidMount() {
        axios.get(`api/test/wanted`)
            .then(res => {
                const items = res.data;
                this.setState({ items });
            })
        localStorage.getItem('user');
    }

    render() {
        let isLoggedIn = false;

        let myUser = localStorage.getItem('user');
        let myToken = localStorage.getItem('token');

        if (myToken && myUser != null) {
            isLoggedIn = true;
        }
        if (isLoggedIn) {
            return this.state.items.map((item) => {
                return <MyWantedItem item={item} />
            })
        }
        else if (!isLoggedIn) {
            <NotLoggedIn />
        }

    }
}