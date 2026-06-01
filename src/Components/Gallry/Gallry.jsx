import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom";
import Web from '../Web/Web';
import Mobile from '../Mobile/Mobile';

export default class Gallry extends Component {
  render() {
    return <>
     <div><h1>Gallry Component</h1></div>
     <div className="container-fluid">
      <div className="row">
      <div className="col-md-6">
        <ul>
          <li>
            <Link to="Web">Web</Link>
          </li>
          <li>
            <Link to="Mobile">Mobile</Link>          
            </li>
        </ul>
      </div>
      <div className="col-md-6">
        <Outlet />
      </div>
      </div>

     </div>

    </>
  }
}
