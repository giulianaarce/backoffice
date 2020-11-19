import React from 'react'
import { Link } from 'react-router-dom'

export default class Banner extends React.Component {
    render() {
        return (
            <>
            <div style={{paddingBottom:20, fontSize:20}}>
            <Link to="/nuevo-banner">Agregar Banner</Link>
            </div>
            <ul>
                <div className="contenedor-banner">
                {this.props.banners.map((banner) => {
                    return (
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={banner.imgUrl} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">{banner.texto}</p>
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