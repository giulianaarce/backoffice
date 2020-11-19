import React from 'react'
import { Link } from 'react-router-dom'

export default class FormProduct extends React.Component {
    constructor() {
        super()
        this.state = {
            producto: "",
            categoria: "",
            codigo: "",
            descripcion: "",
            marketing: "",
            dimension: "",
            color: "",
            precio: "",
            descuento: "",
            imgUrl: ""
        }
    }
    handlderProducto = (e) => {
        this.setState({ producto: e.target.value })
    }
    handlderCategoria = (e) => {
        this.setState({ categoria: e.target.value })
    }
    handlderCodigo = (e) => {
        this.setState({ codigo: e.target.value })
    }
    handlderDescripcion = (e) => {
        this.setState({ descripcion: e.target.value })
    }
    handlderMarketing = (e) => {
        this.setState({ marketing: e.target.value })
    }
    handlderDimension = (e) => {
        this.setState({ dimension: e.target.value })
    }
    handlderColor = (e) => {
        this.setState({ color: e.target.value })
    }
    handlderPrecio = (e) => {
        this.setState({ precio: e.target.value })
    }
    handlderDescuento = (e) => {
        this.setState({ descuento: e.target.value })
    }
    handlerImagen = (e) => {
        this.setState({ imgUrl: e.target.value })
    }
    handlderAgregar = () => {
        const { producto, categoria, codigo, descripcion, marketing, dimension, color, precio, descuento, imgUrl } = this.state
        this.props.nuevoProducto(producto, categoria, codigo, descripcion, marketing, dimension, color, precio, descuento, imgUrl)
    }
    render() {
        return (
            <>
                <Link to="/productos">Volver</Link>
                <form className="container-form">
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Producto</label><br/>
                        <input type="text" className="form-control" onChange={this.handlderProducto}classname="form-control" /><br/>
                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Categoria</label><br/>
                        <input type="text" className="form-control" onChange={this.handlderCategoria}classname="form-control" /><br/>

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Codigo</label><br/>
                        <input type="text" className="form-control" onChange={this.handlderCodigo}classname="form-control" /><br/>

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Dimension</label><br/>
                        <input type="text" className="form-control" onChange={this.handlderDimension}classname="form-control" /><br/>

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Color</label><br/>
                        <input type="text" className="form-control" onChange={this.handlderColor}classname="form-control" /><br/>

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Precio</label><br/>
                        <input type="text" className="form-control" onChange={this.handlderPrecio}classname="form-control" /><br/>

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Descuento</label><br/>
                        <input type="text" className="form-control" onChange={this.handlderDescuento}classname="form-control" /><br/>
                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Link Imagen</label><br/>
                        <input type="text" className="form-control" onChange={this.handlerImagen}classname="form-control" /><br/>
                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Descripcion</label><br/>
                        <textarea type="text" className="form-control" onChange={this.handlderDescripcion}classname="form-control" /><br/>

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Marketing</label><br/>
                        <textarea type="text" className="form-control" onChange={this.handlderMarketing}classname="form-control" /><br/>

                    </div>
                    <button type="submit" onClick={this.handlderAgregar} className="btn btn-primary">Agregar</button>
                </form>
            </>
        )
    }
}