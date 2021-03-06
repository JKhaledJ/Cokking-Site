import React, { Component } from 'react'
import './All.css'
//import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CheckLogin,CheckLogout} from './Redux/Action'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    //debugger;
    return {
        name: state.name,
        email: state.email,
        password: state.password,
        check: state.check
    }
}
const mapActionDispatch=(dispatch)=>{
    return{
        LoginAction:(cu)=>dispatch(CheckLogin(cu)),
        LogoutAction:()=>dispatch(CheckLogout())
    }
}
class Login extends Component {
   
    handleSubmit=(event)=>{
        let flag=true
        event.preventDefault();
        for(let i=0;i<this.props.email.length;i++){
            if(event.target[0].value.toLowerCase()==this.props.email[i] && event.target[1].value==this.props.password[i]){
     
                {this.props.LoginAction(this.props.name[i])}
                this.props.history.push('/')
             }
            
         }
         if(flag){
             console.log("Wrong Email/password.")
         }
        }
        
    
  

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign In</h5>
                                    <form className="form-signin" onSubmit={this.handleSubmit}>
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address"   onChange={this.handleUserChange} required />
                                            {/* <span className="inputEmail">Email address</span> */}
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" onChange={this.handlePassChange} placeholder="Password" required/>
                                            {/* <span className="inputEmail">Password</span> */}
                                            
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            {/* <label className="custom-control-label" for="customCheck1">Remember password</label> */}
                                        </div>


                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                        <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapActionDispatch
    )(Login)

