// import React, { useState, Component } from 'react';
// import axios from "axios";
// import { render } from 'react-dom';
// import { getEspecialesNameApi } from "../../Api/especiales";
// import { BASE_PATH, apiVersion } from "../../Api/config"

// export default class DropdownPedidos extends Component {
//     constructor() {
//         super()
//         this.state = {
//             schemas: []
//         }
//     }

//     componentDidMount() {
//         axios.get("http://localhost:3977/api/especialNames").then(response => {
//             console.log(response);
//             this.setState({
//                 schemas: response
//             })
//         }).catch(error => console.log(error.response));
//     }

//     render() {
//         return (
//             <div>
//                 <UserForm schemas={this.state.schema} />
//             </div>
//         );
//     }



// }

// class UserForm extends React.Component {

//     handleChange(event) {
//         this.setState({ value: event.target.data });
//     }

//     render() {

//         const schemas = this.props.schemas;

//         return (

//             <select value={this.state.value} onChange={this.handleChange}>
//                 {
//                     (schemas && schemas.length > 0) && schemas.map((schema) => {
//                         return (<option value={schema}> {schema}</option>);
//                     })
//                 }
//             </select>


//         )
//     }
// }

