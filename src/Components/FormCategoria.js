import React from 'react'
import {Link} from 'react-router-dom'
export default class FormCategoria extends React.Component {
    constructor() {
        super()
        this.state = {
            categoria: ""
        }
    }

    handlerCategoria = (e) => {
        this.setState({ categoria: e.target.value })
    }

    handlerAgregar = () => {
        const { categoria } = this.state
        this.props.nuevaCategoria(categoria)
    }

    render() {
        return (
            <div>
                <div style={{ paddingBottom: 20, fontSize: 20 }}>
                    <Link to="/categorias">Volver</Link>
                </div>
                <div classname="form-group">
                    <label htmlFor="exampleInputEmail1">Categoria</label><br />
                    <input type="text" className="form-control" onChange={this.handlerCategoria} value={this.state.categoria} classname="form-control" /><br />
                </div>
                <button type="button" onClick={this.handlerAgregar} className="btn btn-primary">Agregar</button>
            </div>
        )
    }
}