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
import Banner from './Components/Banners';
import FormBanner from './Components/FormBanner';
import LogIn from './Components/LogIn';


export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      productos: "",
      banner: "",
      login: false,
      auth:""
    }
  }
  componentDidMount() {
    localStorage.setItem("password",12345)
    localStorage.setItem("login", false)
    this.getProductos()
    this.getBanner()
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
    fetch("http://localhost:4500/banner", {
      method: 'POST',
      body: JSON.stringify(newBanner),
      headers: { 'Content-Type': 'application/json' }
    }).then((res)=>{return res.json()})
    .then((json)=>{return console.log(json)})
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
    fetch("http://localhost:4500/banner")
      .then((res) => { return res.json() })
      .then((banner) => {
        console.log(banner)
        this.setState({ banner: banner })
      })
  }
  login = (username, password) =>{
    const log = {
      username: username,
      password: password
    }
    console.log(log)
    if(log.password == localStorage.getItem("password")){
      return localStorage.setItem("token","sarasa")
    }
    /*
    fetch("http://localhost:4200/login",{
      method:'POST',
      body: JSON.stringify(log),
      headers: { 'Content-Type': 'application/json' }
    }).then((res)=>{return res.json()})
    .then(json=>{
      console.log(json)
      localStorage.setItem(json)
    })*/
  }

  logout = (valor)=>{
    const click = valor
    console.log("desde app", click)
    localStorage.removeItem("token")
    
  }
  

  render() {
    if(localStorage.getItem("token")==undefined){
     return (
       <Router>
         <Switch>
          <Route path="/login"><LogIn login={this.login}/></Route>
          <Route path="*"><Redirect to="login"/></Route>
         </Switch>
       </Router>
     )
    }else{
      return (          
          <Router>
            <NavBar logout={this.logout}/>
            <Switch>
              <Route path="/productos"><Productos productos={this.state.productos || []} /></Route>
              <Route path="/agregarproducto"><FormProduct nuevoProducto={this.nuevoProducto} /></Route>
              <Route path="/categorias"><Categorias /></Route>
              <Route path="/banner"><Banner banners={this.state.banner || []} /></Route>
              <Route path="/nuevo-banner"><FormBanner nuevoBanner={this.nuevoBanner}/></Route>
              <Route path="*"><Redirect to="/productos"></Redirect></Route>
            </Switch>
          </Router>
        
      )

    }
  }
}

