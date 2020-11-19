import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <ul className="nav justify-content-end navbar-dark bg-dark" >
                    <li className="nav-item">
                        <Link className="nav-link" to="/productos">Productos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/categorias">Categorias</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/banner">Banner</Link>
                    </li>
                </ul>
            </div>

        )
    }
}