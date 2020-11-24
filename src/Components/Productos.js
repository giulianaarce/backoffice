import React from 'react'
import {Link} from 'react-router-dom'

export default class Productos extends React.Component {
constructor(){
    super()
    this.state={
        producto:""
    }
}
handleSearch = (e)=>{
    this.setState({producto:e.target.value})
}

handleButton = ()=>{
    const productSearch = this.state.producto
    console.log(productSearch)
    return this.props.search(productSearch)
}
handleEditar = (e)=>{
    let producto = e.target.value
    console.log("Click en: ", e.target.value)
    this.props.id_product(producto)
}
    render() {
        return (
            <div>
                <div style={{paddingBottom:20, fontSize:20}}>
                <Link to="/agregarproducto">Nuevo Producto</Link>
                </div>
                <div>
                    <input type="text" onChange={this.handleSearch}/>
                    <button onClick={this.handleButton}>Buscar</button>
                </div>
                <ul className="list-group">
                <div className="contenedor-productos">
                {this.props.productos.map((producto)=>{
                    return(
                        <div className="card" style={{width: '18rem'}}>
                        <img src={producto.imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{producto.producto}</h5>
                            <p className="card-text">
                                {producto.descripcion}.{producto.marketing}<br/>
                                Colores:{producto.color}<br/>
                                Dimensiones:{producto.dimension}<br/>
                                <strong>${producto.precio}</strong>
                            </p>
                            <Link to="/update"><button value={producto._id} onClick={this.handleEditar}>Editar</button></Link>
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