import React, { Component } from 'react'
import './All.css'

export default class Forget extends Component {
    render() {
        return (
            <div className="signin-form">
            <form action="/examples/actions/confirmation.php" method="post">
                <h2>Forger Password</h2>
                <div className="form-group">
                    <input type="text" className="form-control input-lg" name="username" placeholder="Username" required="required" />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg btn-block signup-btn">Forger Password</button>
                </div>
            </form>
            <div className="text-center">Don't have an account? Sign up</div>
        </div>
        )
    }
}
