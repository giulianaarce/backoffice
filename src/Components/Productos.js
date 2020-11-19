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
                        <div className="card" style={{width: '18rem'}}>
                        <img src={producto.imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{producto.title}</h5>
                            <p className="card-text">
                                {producto.descripcion}.{producto.marketing}<br/>
                                Colores:{producto.color}<br/>
                                Dimensiones:{producto.dimension}<br/>
                                <strong>${producto.precio}</strong>
                            </p>
                            <a href="#" className="btn btn-primary" color="success">Editar</a>
                        </div>
                    </div>
                    )
                })}
                </div>
                </ul>
            </div>
        )
    }
}