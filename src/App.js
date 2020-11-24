import './App.css';

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import NavBar from './Components/NavBar';
import Productos from './Components/Productos';
import FormProduct from './Components/FormProduct';
import Categorias from './Components/Categorias';
import FormCategoria from './Components/FormCategoria'
import Banner from './Components/Banners';
import FormBanner from './Components/FormBanner';
import LogIn from './Components/LogIn';
import UpdateProduct from './Components/UpdateProduct';
import UpdateBanner from './Components/UpdateBanner';
import UpdateCategoria from './Components/UpdateCategoria';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      productos: "",
      banner: "",
      categoria:"",
      login: false,
      auth: "",
      productUpdate: "",
      proudct_id: "",
      banner_id: "",
      categoria_id: ""
    }
  }
  componentDidMount() {

    localStorage.setItem("password", 12345)
    localStorage.setItem("login", false)
    this.getProductos()
    this.getBanner()
    this.getCategorias()
  }

  //Post 
  nuevoProducto = (producto, categoria, codigo, descripcion, marketing, dimension, color, precio, descuento, imgUrl) => {
    const newProduct = {
      producto: producto,
      categoria: categoria,
      codigo: codigo,
      descripcion: descripcion,
      marketing: marketing,
      dimension: dimension,
      color: color,
      precio: precio,
      descuento: descuento,
      imgUrl: imgUrl
    }
    fetch("http://localhost:4500/productos", {
      method: 'POST',
      body: JSON.stringify(newProduct),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => { return res.json() })
      .then((json) => { return console.log(json) })

  }

  nuevoBanner = (texto, imgUrl) => {
    const newBanner = {
      texto: texto,
      imgUrl: imgUrl
    }
    fetch("http://localhost:4500/banners", {
      method: 'POST',
      body: JSON.stringify(newBanner),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => { return res.json() })
      .then((json) => { return console.log(json) })
  }

  nuevaCategoria = (categoria) => {
    const newCategoria = {
      categoria: categoria
    }
    if(localStorage.getItem("token") !== undefined){
      fetch("http://localhost:4500/categorias", {
        method: 'POST',
        body: JSON.stringify(newCategoria),
        headers: { 'Content-Type': 'application/json' }
      }).then((res) => { return res.json() })
        .then((json) => { return console.log(json) })
    }else{

    }
  }

  //Get
  getProductos = () => {
    fetch("http://localhost:4500/productos")
      .then((res) => { return res.json() })
      .then((json) => {
        console.log(json)
        this.setState({ productos: json })
      })
  }
  getBanner = () => {
    fetch("http://localhost:4500/banners")
      .then((res) => { return res.json() })
      .then((banner) => {
        console.log(banner)
        this.setState({ banner: banner })
      })
  }
  getCategorias = () => {
    fetch("http://localhost:4500/categorias")
      .then((res) => { return res.json() })
      .then((categorias) => {
        console.log(categorias)
        this.setState({ categoria: categorias })
      })
  }
  //Logeo
  login = (username, password) => {
    const log = {
      username: username,
      password: password
    }

    fetch("http://localhost:4500/login", {
      method: 'POST',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => { return res.json() })
      .then(json => {
        console.log(json)
        if (json.aut == true) {
           localStorage.setItem("token", json.token)
          return this.setState({ login: true })

        } else {
          window.alert("Usuario o Contraseña incorrectos")
        }
      })


  }

  logout = (valor) => {
    const click = valor
    console.log("desde app", click)
    localStorage.removeItem("token")
    return this.setState({ login: false })
  }
  //Buscador
  searchProduct = (valor) => {
    let value = valor
    console.log("valor desde app", value)

    fetch(`http://localhost:4500/productos/${value}`)
      .then((res) => { return res.json() })
      .then((json) => {
        console.log("Productos buscados", json)
        return this.setState({ productos: json })
      })
  }

  searchBanner = (valor) => {
    let value = valor
    console.log("valor desde app", value)

    fetch(`http://localhost:4500/banners/${value}`)
      .then((res) => { return res.json() })
      .then((json) => {
        console.log("Banners buscados", json)
        return this.setState({ banner: json })
      })
  }

  searchCategoria = (valor) => {
    let value = valor
    console.log("valor desde app", value)

    fetch(`http://localhost:4500/categorias/${value}`)
      .then((res) => { return res.json() })
      .then((json) => {
        console.log("Categorias buscadas", json)
        return this.setState({ categoria: json })
      })
  }

  //Put
  updateProduct = (producto, categoria, codigo, descripcion, marketing, dimension, color, precio, descuento, imgUrl, id) => {
    let productoUpdated = {
      producto: producto,
      categoria: categoria,
      codigo: codigo,
      descripcion: descripcion,
      marketing: marketing,
      dimension: dimension,
      color: color,
      precio: precio,
      descuento: descuento,
      imgUrl: imgUrl
    }

    fetch(`http://localhost:4500/productos/${this.state.proudct_id}`, {
      method: 'PUT',
      body: JSON.stringify(productoUpdated),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => { return res.json() })
      .then((json) => {
        return console.log("Producto actualizado", json)
      })
  }

  updateCategoria = (valor) => {
    let categoriaUpdated = {
      categoria : valor
    }
    fetch(`http://localhost:4500/categorias/${this.state.categoria_id}`, {
      method: 'PUT',
      body: JSON.stringify(categoriaUpdated),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => { return res.json() })
      .then((json) => {
        return console.log("Categoria actualizada", json)
      })

  }

  updateBanner = (texto, imgUrl) => {
    let bannerUpdated = {
      texto: texto,
      imgUrl: imgUrl
    }
    fetch(`http://localhost:4500/banners/${this.state.banner_id}`, {
      method: 'PUT',
      body: JSON.stringify(bannerUpdated),
      headers: { 'Content-Type': 'application/json' }
    }).then((res) => { return res.json() })
      .then((json) => {
        return console.log("Banner actualizado", json)
      })

  }

  //Tomo el Id y lo guardo en un state
  id_product = (valor) => {
    let value = valor
    console.log("Click desde App: ", value)
    return this.setState({ proudct_id: value })
  }

  id_categoria = (valor) => {
    let value = valor
    console.log("Click desde App: ", value)
    return this.setState({ categoria_id: value })
  }

  id_banner = (valor) => {
    let value = valor
    console.log("Click desde App: ", value)
    return this.setState({ banner_id: value })
  }


  render() {
    if (!localStorage.getItem("token")) {
      return (
        <Router>
          <Switch>
            <Route path="/login"><LogIn login={this.login} /></Route>
            <Route path="*"><Redirect to="login" /></Route>
          </Switch>
        </Router>
      )
    } else {
      return (
        <Router>
          <NavBar logout={this.logout} />
          <Switch>
            <Route path="/productos"><Productos productos={this.state.productos || []} search={this.searchProduct} test={this.updateProduct} id_product={this.id_product} /></Route>
            <Route path="/update"><UpdateProduct productos={this.state.productUpdate || []} update={this.updateProduct} id={this.state.proudct_id} /></Route>
            <Route path="/agregarproducto"><FormProduct nuevoProducto={this.nuevoProducto} /></Route>
            <Route path="/banner"><Banner banners={this.state.banner || []}  searchBanner={this.searchBanner} id_banner={this.id_banner}/></Route>
            <Route path="/nuevo-banner"><FormBanner nuevoBanner={this.nuevoBanner} /></Route>
            <Route path="/updateBanner"><UpdateBanner updateBanner={this.updateBanner} banner_id={this.state.banner_id}/></Route>
            <Route path="/categorias"><Categorias categorias={this.state.categoria || []} searchCategoria={this.searchCategoria} id_categoria={this.id_categoria}/></Route>
            <Route path="/nueva-categoria"><FormCategoria nuevaCategoria={this.nuevaCategoria}/></Route>
            <Route path="/updateCategoria"><UpdateCategoria updateCategoria={this.updateCategoria} categoria_id={this.state.categoria_id}/></Route>
            <Route path="*"><Redirect to="/productos"></Redirect></Route>
          </Switch>
        </Router>

      )

    }
  }
}

