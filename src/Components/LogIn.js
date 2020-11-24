import React from 'react'

export default class LogIn extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    handlerUser = (e) => {
        this.setState({ username: e.target.value })
    }
    handlerPass = (e) => {
        this.setState({ password: e.target.value })
    }
    handlerSubmit = () => {
        const {username, password} = this.state
        console.log(username, password)
        this.props.login(username, password)
    }
    render() {
        return (
            <div className="container-login">
            <h1 className="container-title">La Veloz</h1>
            <div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Usuario</label>
                    <input type="text" onChange={this.handlerUser} className="form-control"  />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Contraseña</label>
                    <input type="password" onChange={this.handlerPass} className="form-control"/>
                </div>
                <button type="button" onClick={this.handlerSubmit} className="btn btn-primary">Submit</button>
            </div>
            </div>
        )
    }
}