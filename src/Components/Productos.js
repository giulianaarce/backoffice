import React from 'react'
import {Link} from 'react-router-dom'

export default class Productos extends React.Component {

    render() {
        return (
            <div>
                <div style={{paddingBottom:20, fontSize:20}}>
                <Link to="/agregarproducto">Nuevo Producto</Link>
                </div>
                <ul className="list-group">
                <div className="contenedor-productos">
                {this.props.productos.map((producto)=>{
                    return(
                    <li className="list-group-item">{producto.producto}/{producto.categoria}/{producto.precio}</li>
                    )
                })}
                </div>
                </ul>
            </div>
        )
    }
}