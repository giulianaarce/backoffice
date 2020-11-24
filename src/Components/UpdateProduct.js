import React from 'react'
import {Link} from 'react-router-dom'
export default class UpdateProduct extends React.Component {
    constructor(props) {
        super(props)
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
            imgUrl: "",
            id: ""
        }
    }

    async componentDidMount() {

        fetch(`http://localhost:4500/productos/producto/${this.props.id}`)
            .then((res) => { return res.json() })
            .then((json) => {
                console.log("Productos buscados", json)
                const productos = [json]
                console.log("Productos: ", productos)
                productos.map((producto) => {
                    this.setState({
                        producto: producto.producto,
                        categoria: producto.categoria,
                        codigo: producto.codigo,
                        descripcion: producto.descripcion,
                        marketing: producto.marketing,
                        dimension: producto.dimension,
                        color: producto.color,
                        precio: producto.precio,
                        descuento: producto.descuento,
                        imgUrl: producto.imgUrl,
                        id: producto.id
                    })

                })
            })
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
    handlderAgregar = (e) => {
        let id = this.state.id
        const { producto, categoria, codigo, descripcion, marketing, dimension, color, precio, descuento, imgUrl } = this.state
        this.props.update(producto, categoria, codigo, descripcion, marketing, dimension, color, precio, descuento, imgUrl, id)
    }
    render() {
        return (
            <div>
                <div style={{ paddingBottom: 20, fontSize: 20 }}>
                    <Link to="/productos">Volver</Link>
                </div>
                <div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Producto</label><br />
                        <input type="text" className="form-control" onChange={this.handlderProducto} value={this.state.producto} classname="form-control" /><br />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Categoria</label><br />
                        <input type="text" className="form-control" onChange={this.handlderCategoria} value={this.state.categoria} classname="form-control" /><br />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Codigo</label><br />
                        <input type="text" className="form-control" onChange={this.handlderCodigo} value={this.state.codigo} classname="form-control" /><br />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Dimension</label><br />
                        <input type="text" className="form-control" onChange={this.handlderDimension} value={this.state.dimension} classname="form-control" /><br />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Color</label><br />
                        <input type="text" className="form-control" onChange={this.handlderColor} value={this.state.color} classname="form-control" /><br />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Precio</label><br />
                        <input type="text" className="form-control" onChange={this.handlderPrecio} value={this.state.precio} classname="form-control" /><br />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Descuento</label><br />
                        <input type="text" className="form-control" onChange={this.handlderDescuento} value={this.state.descuento} classname="form-control" /><br />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Link Imagen</label><br />
                        <input type="text" className="form-control" onChange={this.handlerImagen} value={this.state.imgUrl} classname="form-control" /><br />
                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Descripcion</label><br />
                        <textarea type="text" className="form-control" onChange={this.handlderDescripcion} value={this.state.descripcion} classname="form-control" /><br />

                    </div>
                    <div classname="form-group">
                        <label htmlFor="exampleInputEmail1">Texto de Marketing(opcional)</label><br />
                        <textarea type="text" className="form-control" onChange={this.handlderMarketing} value={this.state.marketing} classname="form-control" /><br />

                    </div>
                    <button type="button" onClick={this.handlderAgregar} className="btn btn-primary">Agregar</button>
                </div>




            </div>
        )
    }
}
    /*
render(){
if(this.props.productos !== null){
return(
    <div>
        {this.props.productos.map((producto)=>{
         return   <h1>{producto.producto}</h1>
        })}
    </div>
)
}else{
return(
    <h1>Editor</h1>
)
}
}*/