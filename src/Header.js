import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link } from "react-router-dom";
import {CheckLogout} from './Redux/Action'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        name: state.name,
        check: state.check,
        cUser:state.currentUser
    }
}
const mapActionDispatch=(dispatch)=>{
    return{
       // LoginAction:(cu)=>dispatch(CheckLogin(cu)),
        LogoutAction:()=>dispatch(CheckLogout())
    }
}

 function Header(props) {
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
                   
                            { (props.check==true)? <button style={{background:'none',border:'none'}} class="nav-link">{props.cUser}</button>: <Link to="/login" style={{background:'none'}} class="nav-link" >Login</Link>}
                   
                    
                        { (props.check==true)?<button style={{background:'none',border:'none'}} class="nav-link" onClick={props.LogoutAction}  >Logout</button>:<Link to="/Register" style={{background:'none'}} class="nav-link" >Register</Link>} 
                  
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