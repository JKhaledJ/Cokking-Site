import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Link, Router } from "react-router-dom";
import {CheckLogin,CheckLogout} from './Redux/Action'
import { connect } from 'react-redux'
import Login from './Login.js'
import Main from './Main.js';

const mapStateToProps = (state) => {
    return {
        name: state.name,
        check: state.check
    }
}
const mapActionDispatch=(dispatch)=>{
    return{
        LoginAction:()=>dispatch(CheckLogin()),
        LogoutAction:()=>dispatch(CheckLogout())
    }
}

 function Header(props) {
    console.log(props.check)
    return (
       
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to="/" className="navbar-brand" ><b>HOME</b></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                
                    <Link to="/details" className="nav-link" >Details</Link>
                    <Link to="/prices" className="nav-link" >Prices</Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <Link to="/action1" className="dropdown-item" >Action</Link>
                        <Link to="/action2" className="dropdown-item" >Action2</Link>
                        <Link to="/action3" className="dropdown-item" >Action3</Link>
                        <NavDropdown.Divider />
                        <Link to="/something" className="dropdown-item" >Some thing</Link>
                    </NavDropdown>
                </Nav>
                <Nav>
                   
                            { (props.check==true)? <button style={{background:'grey'}} class="nav-link">{props.name}</button>: <Link to="/login" style={{background:'grey'}} class="nav-link" >Login</Link>}
                   
                    
                        { (props.check==true)?<button style={{background:'grey'}} class="nav-link" onClick={props.LogoutAction}  >Logout</button>:<button style={{background:'grey'}} class="nav-link" >Register</button>} 
                  
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

export default connect(
    mapStateToProps,
    mapActionDispatch
)(Header)