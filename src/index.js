import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import ParticlesBg from 'particles-bg'
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs"
import AboutTheProject from "./components/AboutTheProject"

import ContactUs from "./components/ContactUs"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { formatMs } from '@material-ui/core';
import NavBar from "./components/NavBar";

ReactDOM.render(
  <React.StrictMode>
  <Router forceRefresh>
  <div className="particles">
  <ParticlesBg num= {[80]} type="cobweb" color={"#1f5156"} bg={true}  />
</div>
  
 <NavBar/>
 <Switch>
  <Route exact path="/" component={App} />
  <Route path="/AboutUs" component={AboutUs} />
  <Route path="/AboutTheProject" component={AboutTheProject} />  
  <Route path="/ContactUs" component={ContactUs} />  
 </Switch>
</Router>
</React.StrictMode>,
document.getElementById('root')
);

document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();




