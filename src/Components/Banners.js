import React from 'react'
import { Link } from 'react-router-dom'

export default class Banner extends React.Component {
   constructor(){
       super()
       this.state={
           banner:""
       }
   }
   
    handleSearch = (e)=>{
        this.setState({banner:e.target.value})
    }
    
    handleButton = ()=>{
        const bannerSearch = this.state.banner
        console.log(bannerSearch)
        return this.props.searchBanner(bannerSearch)
    }
    handleEditar = (e)=>{
        let id = e.target.value
        console.log("Click en: ", e.target.value)
        this.props.id_banner(id)
    }

    render() {
        return (
            <>
                <div style={{ paddingBottom: 20, fontSize: 20 }}>
                    <Link to="/nuevo-banner">Agregar Banner</Link>
                </div>
                <div>
                    <input className="form-control" type="text" onChange={this.handleSearch} />
                    <button className="btn btn-light" onClick={this.handleButton}>Buscar</button>
                </div>
                <ul>
                    <div className="contenedor-banner">
                        {this.props.banners.map((banner) => {
                            return (
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={banner.imgUrl} className="card-img-top" />
                                    <div className="card-body">
                                        <p className="card-text">{banner.texto}</p>
                                        <Link to="/updateBanner"><button className="btn btn-success" value={banner._id} onClick={this.handleEditar}>Editar</button></Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </ul>
            </>
        )
    }
}