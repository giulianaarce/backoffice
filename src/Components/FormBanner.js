import React from 'react'
import { Link } from 'react-router-dom'

export default class FormBanner extends React.Component {
    constructor() {
        super()
        this.state = {
            imgUrl: "",
            texto: ""
        }
    }
    handlerUrl = (e) => {
        this.setState({ imgUrl: e.target.value })
    }
    handlerTexto = (e) => {
        this.setState({ texto: e.target.value })
    }
    handlderAgregar = () => {
        const { texto, imgUrl } = this.state
        this.props.nuevoBanner(texto, imgUrl)
    }
    render() {
        return (
            <>
            <div style={{paddingBottom:20, fontSize:20}}>
            <Link to="/banner">Volver</Link>
            </div>
            <form className="container-form">
                <div classname="form-group">
                    <label htmlFor="exampleInputEmail1">Url de imagen</label><br/>
                    <input type="text"className="form-control" onChange={this.handlerUrl} classname="form-control" /><br/>
                </div>
                <div classname="form-group">
                    <label htmlFor="exampleInputEmail1">Texto de imagen</label><br/>
                    <input type="text"className="form-control" onChange={this.handlerTexto} classname="form-control" /><br/>
                </div>
                <button type="submit" onClick={this.handlderAgregar} className="btn btn-primary">Agregar</button>
            </form>
            </>
        )
    }
}