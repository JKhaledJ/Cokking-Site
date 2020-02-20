import React, { Component } from 'react';
import './All.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux'
import { CheckRegister } from './Redux/Action'
const mapActionDispatch = (dispatch) => {
    return {
        RegisterAction: (n, x, y) => dispatch(CheckRegister(n, x, y))
    }
}

const mapStateToProps = (state) => {
    //debugger;
    return {
        email: state.email
    }
}

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm_password: ''

    }
    handleRegisteration = (e) => {
        console.log(this.props.email);
        e.preventDefault();
        if (this.state.password == this.state.confirm_password) {
            let flag=true
            for (let i = 0; i <this.props.email.length; i++) {
                if (this.state.email.toLocaleLowerCase() == this.props.email[i]) {
                    alert("Email already existed")
                    flag=false
                    break;
                }
            }
            if(flag){
                { this.props.RegisterAction(this.state.name, this.state.email.toLowerCase(), this.state.password) }
                alert("Succesfully Registered.")
                this.props.history.push('/login')
            }
        }
        else {
            alert("Password and Confirm password does not match")
        }
    }
    render() {
        return (
            <div className="signin-form">
                <form onSubmit={this.handleRegisteration} method="post">
                    <h2>Sign Up</h2>
                    <p className="hint-text">Sign Up with your social media account</p>
                    <div className="social-btn text-center">
                        <a href="#" className="btn btn-primary btn-lg" title="Facebook"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="btn btn-info btn-lg" title="Twitter"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="btn btn-danger btn-lg" title="Google"><i className="fa fa-google"></i></a>
                    </div>
                    <div className="or-seperator"><b>or</b></div>
                    <div className="form-group">
                        <input type="text" className="form-control input-lg" name="username" onChange={(e) => this.setState({ name: e.target.value })} placeholder="Username" required="required" />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control input-lg" onChange={(e) => this.setState({ email: e.target.value })} name="email" placeholder="Email Address" required="required" value={this.state.email} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" onChange={(e) => this.setState({ password: e.target.value })} name="password" placeholder="Password" required="required" value={this.state.password} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control input-lg" onChange={(e) => this.setState({ confirm_password: e.target.value })} name="confirm_password" placeholder="Confirm Password" required="required" value={this.state.confirm_password} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Sign Up</button>
                    </div>
                </form>
                <div className="text-center">Already have an account? Sign in</div>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapActionDispatch
)(Register)