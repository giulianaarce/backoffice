import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

   handlerButton = (e)=>{
    const click = e.target.value
    console.log("desde nav", click)
    this.props.logout(click)
   } 
    render() {
        return (
            <div>
                <ul className="nav justify-content-end navbar-dark" style={{backgroundColor:"#F5C664"}}>
                    <li className="nav-item">
                        <Link className="nav-link" to="/productos">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/banner">Banner</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/categorias">Categorias</Link>
                    </li>
                    <li>
                        <button type="button" onClick={this.handlerButton} value="false" className="btn btn-outline-dark">Logout</button>
                    </li>
                </ul>
            </div>

        )
    }
}