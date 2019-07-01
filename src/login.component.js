import React, { Component } from 'react'
import { tsConstructorType } from '@babel/types';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email : '',
            password : ''
        }
    }

    onEmailChange(e) {
        this.setState({
            email : e.target.value
        })
    }

    onPasswordChange(e) {
        this.setState({
            password : e.target.value
        })
    }

    onSubmit(e) {
        console.log(`The values are ${this.state.email}, ${this.state.password}`)
        this.setState({
            email : '',
            password : ''
        })
    } 

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Login</h3>
                <form onSubmit = {this.onSubmit}>
                    <div className="form-group">
                        <label>Email:  </label>
                        <input 
                        type="text"
                        className="form-control"
                        value = {this.state.email}
                        onChange = {this.onEmailChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                        type="password"
                        className="form-control"
                        value = {this.state.password}
                        onChange = {this.onPasswordChange}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Login" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}

