import React from 'react'
import {Link} from 'react-router-dom'
export default class UpdateCategoria extends React.Component {
    constructor() {
        super()
        this.state = {
            categoria: ""
        }
    }
    async componentDidMount() {

        fetch(`http://localhost:4500/categorias/categoria/${this.props.categoria_id}`)
            .then((res) => { return res.json() })
            .then((json) => {
                console.log("Categorias buscadas", json)
                const categorias = [json]
                console.log("Categorias: ", categorias)
                categorias.map((categoria) => {
                    this.setState({ categoria: categoria.categoria })
                })
            })
    }
    handlerCategoria = (e) => {
        this.setState({ categoria: e.target.value })
    }

    handlerAgregar = () => {
        const { categoria } = this.state
        this.props.updateCategoria(categoria)
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