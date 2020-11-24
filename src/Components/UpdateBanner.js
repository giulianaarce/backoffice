import React from 'react'
import { Link } from 'react-router-dom'

export default class UpdateBanner extends React.Component {
    constructor() {
        super()
        this.state = {
            texto: "",
            imgUrl: "",
            id: ""
        }
    }
    async componentDidMount() {

        fetch(`http://localhost:4500/banners/banner/${this.props.banner_id}`)
            .then((res) => { return res.json() })
            .then((json) => {
                console.log("Productos buscados", json)
                const banners = [json]
                console.log("Banners: ", banners)
                banners.map((banner) => {
                    this.setState({
                        texto: banner.texto,
                        imgUrl: banner.imgUrl,
                        id: banner.id
                    })
                })
            })
    }

    handlerTexto = (e) => {
        this.setState({ texto: e.target.value })
    }
    handlerLink = (e) => {
        this.setState({ imgUrl: e.target.value })
    }
    handlderAgregar = () => {
        const { texto, imgUrl } = this.state
        this.props.updateBanner(texto, imgUrl)

    }
    render() {
        return (
            <div>
                <div style={{ paddingBottom: 20, fontSize: 20 }}>
                    <Link to="/banner">Volver</Link>
                </div>
                <div classname="form-group">
                    <label htmlFor="exampleInputEmail1">Texto Imagen</label><br />
                    <input type="text" className="form-control" onChange={this.handlerTexto} value={this.state.texto} classname="form-control" /><br />
                </div>
                <div classname="form-group">
                    <label htmlFor="exampleInputEmail1">Link Imagen</label><br />
                    <input type="text" className="form-control" onChange={this.handlerLink} value={this.state.imgUrl} classname="form-control" /><br />

                </div>
                <button type="button" onClick={this.handlderAgregar} className="btn btn-primary">Agregar</button>
            </div>
        )
    }
}