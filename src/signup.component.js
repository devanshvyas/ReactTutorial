import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Sign up</h3>
                <form>
                    <div className="form-group">
                        <label>Full Name  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Email  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Password </label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Sign up" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
