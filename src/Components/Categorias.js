import React from 'react'
import {Link} from 'react-router-dom'
export default class Categorias extends React.Component {
    constructor(){
        super()
        this.state={
            categoria:""
        }
    }
    
     handleSearch = (e)=>{
         this.setState({categoria:e.target.value})
     }
     
     handleButton = ()=>{
         const categoriaSearch = this.state.categoria
         console.log(categoriaSearch)
         return this.props.searchBanner(categoriaSearch)
     }
     handleEditar = (e)=>{
        let id = e.target.value
        console.log("Click en: ", e.target.value)
        this.props.id_categoria(id)
    }
    render() {
        return (
            <div>
                <div style={{ paddingBottom: 20, fontSize: 20 }}>
                    <Link to="/nueva-categoria">Agregar Categoria</Link>
                </div>
                <div>
                    <input className="form-control" type="text" onChange={this.handleSearch} />
                    <button className="btn btn-light" onClick={this.handleButton}>Buscar</button>
                </div>
                <ul className="list-group">
                {this.props.categorias.map((categoria)=>{
                  return  (
                  <div>
                      <li className="list-group-item">{categoria.categoria} <Link to="/updateCategoria"><button className="btn btn-success" value={categoria._id} onClick={this.handleEditar}>Editar</button></Link></li>
                        
                  </div>
                  
                  )
                })}
            </ul>
            </div>
        )
    }
}