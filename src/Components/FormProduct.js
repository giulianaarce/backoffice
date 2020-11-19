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
                <form>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Producto</label>
                        <input type="text" onChange={this.handlderProducto}classname="form-control" />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Categoria</label>
                        <input type="text" onChange={this.handlderCategoria}classname="form-control" />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Codigo</label>
                        <input type="text" onChange={this.handlderCodigo}classname="form-control" />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Descripcion</label>
                        <input type="text" onChange={this.handlderDescripcion}classname="form-control" />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Marketing</label>
                        <input type="text" onChange={this.handlderMarketing}classname="form-control" />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Dimension</label>
                        <input type="text" onChange={this.handlderDimension}classname="form-control" />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Color</label>
                        <input type="text" onChange={this.handlderColor}classname="form-control" />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Precio</label>
                        <input type="text" onChange={this.handlderPrecio}classname="form-control" />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Descuento</label>
                        <input type="text" onChange={this.handlderDescuento}classname="form-control" />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Imagen</label>
                        <input type="text" onChange={this.handlerImagen}classname="form-control" />
                    </div>
                    <button type="submit" onClick={this.handlderAgregar} className="btn btn-primary">Agregar</button>
                </form>
            </>
        )
    }
}